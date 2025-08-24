import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { MapPin, TrendingUp, DollarSign, Shield, Coins, Building2 } from "lucide-react";

export const Card = forwardRef(
  ({ customClass, asset, onCardClick, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 rounded-xl border-2 border-blue-200/30 bg-white [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] cursor-pointer transition-all duration-300 hover:border-blue-400/60 hover:scale-105 shadow-lg ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
      onClick={() => onCardClick && onCardClick(asset)}
    >
      <div className="w-full h-full flex flex-col">
        {/* Image takes up most of the card */}
        <div className="flex-1 relative overflow-hidden rounded-t-xl">
          <img
            src={asset.image}
            alt={asset.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent" />
        </div>
        
        {/* Card content at bottom */}
        <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-b-xl">
          <h3 className="text-sm font-bold text-white mb-1 truncate">{asset.title}</h3>
          <p className="text-xs text-blue-100 truncate">{asset.subtitle}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-blue-200">{asset.location}</span>
            <span className="text-xs font-semibold text-green-300">{asset.roi}</span>
          </div>
        </div>
      </div>
    </div>
  )
);
Card.displayName = "Card";

const makeSlot = (
  i,
  distX,
  distY,
  total
) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap = ({
  width = 400,
  height = 320,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
  assets = [],
}) => {
  const [selectedAsset, setSelectedAsset] = useState(null);
  
  const config =
    easing === "elastic"
      ? {
        ease: "elastic.out(0.6,0.9)",
        durDrop: 2,
        durMove: 2,
        durReturn: 2,
        promoteOverlap: 0.9,
        returnDelay: 0.05,
      }
      : {
        ease: "power1.inOut",
        durDrop: 0.8,
        durMove: 0.8,
        durReturn: 0.8,
        promoteOverlap: 0.45,
        returnDelay: 0.2,
      };

  // Use assets length for refs when no children provided
  const effectiveLength = assets.length > 0 ? assets.length : childArr.length;
  
  const childArr = useMemo(
    () => Children.toArray(children),
    [children]
  );
  const refs = useMemo(
    () => Array.from({ length: effectiveLength }, () => React.createRef()),
    [effectiveLength]
  );

  const order = useRef(
    Array.from({ length: effectiveLength }, (_, i) => i)
  );

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  const handleCardClick = (asset) => {
    setSelectedAsset(asset);
    if (onCardClick) {
      onCardClick(asset);
    }
  };

  useEffect(() => {
    const total = refs.length;
    if (total === 0) return;
    
    refs.forEach((r, i) =>
      placeNow(
        r.current,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount
      )
    );

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, effectiveLength]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
        key: i,
        ref: refs[i],
        style: { width, height, ...(child.props.style ?? {}) },
        asset: assets[i],
        onCardClick: handleCardClick,
      })
      : child
  );

  // If no children provided, render cards from assets array
  const assetCards = assets.length > 0 ? assets.map((asset, i) => (
    <Card
      key={asset.id}
      ref={refs[i]}
      asset={asset}
      onCardClick={handleCardClick}
      style={{ width, height }}
    />
  )) : rendered;

  return (
    <div className="relative w-full h-full">
      {/* CardSwap Container - positioned for the new compact layout */}
      <div
        ref={container}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center perspective-[900px] overflow-visible"
        style={{ width, height }}
      >
        {assetCards}
      </div>
    </div>
  );
};

export default CardSwap;
