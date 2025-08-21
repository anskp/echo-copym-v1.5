import React from 'react';

function getInitials(name) {
  if (!name) return '';
  const parts = String(name).trim().split(/\s+/);
  const first = parts[0]?.[0] || '';
  const last = parts[parts.length - 1]?.[0] || '';
  return (first + last).toUpperCase();
}

function CredentialCard({ user, variant = 'bottleGreen', logoSrc, logoSize = 24, stacked = false, backVariant = 'darkBlue' }) {
  if (!user) return null;

  const brandName = 'copyM';

  const containerStyle = {
    width: 420,
    borderRadius: 20,
    background: '#ffffff',
    boxShadow:
      '0 24px 60px rgba(0, 64, 32, 0.2), 0 12px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
    border: '1px solid #e6f4ee',
    overflow: 'hidden',
    color: '#0b1f17',
    fontFamily: 'Inter, Segoe UI, system-ui, -apple-system, Roboto, Helvetica, Arial, "Noto Sans", sans-serif',
  };

  const headerBackground =
    variant === 'darkBlue'
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%)'
      : 'linear-gradient(135deg, #00563B 0%, #0B6B49 55%, #0E7C61 100%)';

  const headerStyle = {
    background: headerBackground,
    color: 'white',
    padding: '18px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'inset 0 -3px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.25)'
  };

  const brandStyle = {
    fontFamily: 'Montserrat, Inter, Segoe UI, system-ui, -apple-system, Roboto, Helvetica, Arial, "Noto Sans", sans-serif',
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: 1.0,
    textTransform: 'uppercase',
    lineHeight: 1,
  };

  // Adjusted gap between logo and wordmark to 6px
  const headerLeftStyle = { display: 'flex', alignItems: 'center', gap: 6 };
  // Logo aligned with text baseline
  const logoStyle = {
    width: logoSize,
    height: logoSize,
    display: 'block',
    objectFit: 'contain',
    transform: 'translateY(0px)'
  };
  const resolvedLogoSrc = logoSrc || (import.meta?.env?.BASE_URL || '') + 'copym-logo.png';

  const chipStyle = {
    width: 54,
    height: 36,
    borderRadius: 8,
    background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(230,244,238,0.9))',
    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.12)',
  };

  const bodyStyle = {
    padding: 20,
    display: 'grid',
    gridTemplateColumns: '1fr 140px',
    gap: 20,
    alignItems: 'center',
  };

  const personRowStyle = { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 };
  const avatarStyle = {
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: variant === 'darkBlue' ? '#e2e8f0' : '#e6f4ee',
    color: variant === 'darkBlue' ? '#0f172a' : '#065f46',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 8px rgba(0,0,0,0.08)'
  };

  const labelStyle = { color: '#6b7280', fontSize: 12, fontWeight: 500, marginBottom: 4 };
  const valueStyle = { color: '#111827', fontSize: 16, fontWeight: 600, letterSpacing: 0.2 };

  const qrPanelStyle = {
    background: '#ffffff',
    borderRadius: 12,
    padding: 10,
    boxShadow: '0 10px 24px rgba(0,64,32,0.12), inset 0 1px 0 rgba(255,255,255,0.8)',
    border: '1px solid #e6f4ee',
    textAlign: 'center',
  };

  const footerStyle = {
    background: '#f9fafb',
    borderTop: '1px solid #eef2f7',
    padding: '12px 20px',
    fontSize: 12,
    color: '#6b7280',
    display: 'flex',
    justifyContent: 'space-between',
  };

  // Stacked presentation: render a back card and the main card with subtle rotation/offset
  if (stacked) {
    return (
      <div style={{ position: 'relative', width: containerStyle.width, paddingTop: 16 }}>
        <div style={{ position: 'absolute', top: -10, left: -12, transform: 'rotate(-4deg)', filter: 'blur(0px)', zIndex: 0 }}>
          <CredentialCard user={user} variant={backVariant} logoSrc={logoSrc} logoSize={logoSize} stacked={false} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <CredentialCard user={user} variant={variant} logoSrc={logoSrc} logoSize={logoSize} stacked={false} />
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={headerLeftStyle}>
          <img
            src={resolvedLogoSrc}
            alt="Copym logo"
            style={logoStyle}
            onError={(e) => {
              // Swap to a visible fallback icon if custom logo is missing
              const fallback = (import.meta?.env?.BASE_URL || '') + 'logo192.png';
              if (e.currentTarget.src.endsWith('copym-logo.png')) {
                e.currentTarget.onerror = null;
                e.currentTarget.src = fallback;
                e.currentTarget.style.filter = 'grayscale(100%) contrast(120%) brightness(0.9)';
              } else {
                e.currentTarget.style.display = 'none';
              }
            }}
          />
          <div style={brandStyle}>COPYM</div>
        </div>
        <div style={chipStyle} />
      </div>

      <div style={bodyStyle}>
        <div>
          <div style={personRowStyle}>
            <div style={avatarStyle}>{getInitials(user.name)}</div>
            <div>
              <div style={labelStyle}>Name</div>
              <div style={valueStyle}>{user.name}</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <div style={labelStyle}>Employee No.</div>
              <div style={valueStyle}>{user.employeeNumber}</div>
            </div>
            <div>
              <div style={labelStyle}>Pass No.</div>
              <div style={valueStyle}>{user.passNumber}</div>
            </div>
          </div>

          <div style={{ marginTop: 14 }}>
            <div style={labelStyle}>Points</div>
            <div style={valueStyle}>{user.points}</div>
          </div>
        </div>

        <div style={qrPanelStyle}>
          {user.qrImage ? (
            <img
              src={user.qrImage}
              alt="QR Code"
              style={{ width: 120, height: 120, display: 'block', margin: '0 auto' }}
            />
          ) : (
            <div style={{ width: 120, height: 120, display: 'grid', placeItems: 'center', color: '#9ca3af' }}>QR</div>
          )}
          <div style={{ marginTop: 8, fontSize: 11, color: '#6b7280' }}>Scan to verify</div>
        </div>
      </div>

      <div style={footerStyle}>
        <div>ID: {user.employeeNumber}</div>
        <div>Pass: {user.passNumber}</div>
      </div>
    </div>
  );
}

export default CredentialCard;


