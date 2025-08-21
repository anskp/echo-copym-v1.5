import React, { useState, useEffect } from 'react';
import {
  Drawer,
  Box,
  IconButton,
  Typography,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Switch,
  Chip,
  Paper,
  Container,
  Stack,
  Alert,
  LinearProgress
} from '@mui/material';
import {
  Close as CloseIcon,
  ArrowBack as ArrowBackIcon,
  CheckCircle as CheckCircleIcon,
  AccountBalance as AccountBalanceIcon,
  Token as TokenIcon,
  Palette as PaletteIcon,
  Settings as SettingsIcon,
  Security as SecurityIcon,
  Verified as VerifiedIcon,
  Memory as MemoryIcon,
  CloudQueue as CloudQueueIcon,
  MonetizationOn as MonetizationOnIcon,
  Inventory as InventoryIcon,
  Home as HomeIcon,
  Public as PublicIcon,
  FlashOn as FlashIcon,
  Brush as BrushIcon,
  CardGiftcard as CardGiftcardIcon,
  Smartphone as SmartphoneIcon,
  Description as DescriptionIcon,
  Stars as StarsIcon,
  Business as BusinessIcon
} from '@mui/icons-material';

const CreateAssetModal = ({ open, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState('');
  const [customAssetName, setCustomAssetName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [formData, setFormData] = useState({
    network: 'mainnet',
    selectedNetwork: '',
    tokenName: '',
    tokenSymbol: '',
    adminAddress: '',
    minterAddress: '',
    pauserAddress: ''
  });

  // Force re-render key
  const componentKey = `create-asset-modal-v3-${Date.now()}`;

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!open) {
      // Reset everything when modal closes
      setCurrentStep(0);
      setSelectedAsset('');
      setCustomAssetName('');
      setSelectedTemplate('');
      setFormData({
        network: 'mainnet',
        selectedNetwork: '',
        tokenName: '',
        tokenSymbol: '',
        adminAddress: '',
        minterAddress: '',
        pauserAddress: ''
      });
    }
  }, [open]);

  // Always start from step 0 whenever the drawer opens
  useEffect(() => {
    if (open) {
      setCurrentStep(0);
    }
  }, [open]);

  // Financial asset options
  const financialAssets = [
    { id: 'stablecoin', name: 'Stablecoin', icon: MonetizationOnIcon, disabled: false },
    { id: 'commodity', name: 'Commodity', icon: InventoryIcon, disabled: false },
    { id: 'real-estate', name: 'Real estate', icon: HomeIcon, disabled: false },
    { id: 'real-world-asset', name: 'Real-world asset', icon: PublicIcon, disabled: false }
  ];
  
  // Non-financial asset options
  const nonFinancialAssets = [
    { id: 'utility', name: 'Utility', icon: FlashIcon, disabled: false },
    { id: 'art', name: 'Art', icon: BrushIcon, disabled: false },
    { id: 'loyalty', name: 'Loyalty', icon: CardGiftcardIcon, disabled: false },
    { id: 'other', name: 'Other', icon: SmartphoneIcon, disabled: false }
  ];
  
  // Token templates based on selected asset
  const templates = {
    stablecoin: [
      { id: 'erc20f', name: 'Upgradeable ERC-20F', standard: 'ERC-20', description: 'A fungible token that can be used as a unit of account, for issuing stablecoins, or for fundraising.', fireblocks: true, isEVM: true },
      { id: 'solana', name: 'Solana Token 2022', standard: 'Token-2022', description: 'A fungible token with advanced features for customizable asset management.', fireblocks: false, isEVM: false },
      { id: 'ripple-stablecoin', name: 'Ripple token', standard: 'Ripple', description: 'A template for creating a token on the Ripple blockchain.', fireblocks: false, isEVM: false }
    ],
    commodity: [
      { id: 'erc20f-commodity', name: 'Upgradeable ERC-20F', standard: 'ERC-20', description: 'A fungible token that can be used as a unit of account, for issuing stablecoins, or for fundraising.', fireblocks: true, isEVM: true },
      { id: 'erc721f-commodity', name: 'Upgradeable ERC-721F', standard: 'ERC-721', description: 'A token used for creating unique digital assets, including collectibles, artworks, and in-game items.', fireblocks: true, isEVM: true },
      { id: 'erc1155f-commodity', name: 'Upgradeable ERC-1155F', standard: 'ERC-1155', description: 'A token that can be used for in-game items, digital collectibles, and tokenized assets.', fireblocks: true, isEVM: true },
      { id: 'ripple-commodity', name: 'Ripple token', standard: 'Ripple', description: 'A template for creating a token on the Ripple blockchain.', fireblocks: false, isEVM: false }
    ],
    'real-estate': [
      { id: 'erc20f-realestate', name: 'Upgradeable ERC-20F', standard: 'ERC-20', description: 'A fungible token that can be used as a unit of account, for issuing stablecoins, or for fundraising.', fireblocks: true, isEVM: true },
      { id: 'erc721f-realestate', name: 'Upgradeable ERC-721F', standard: 'ERC-721', description: 'A token used for creating unique digital assets, including collectibles, artworks, and in-game items.', fireblocks: true, isEVM: true },
      { id: 'erc1155f-realestate', name: 'Upgradeable ERC-1155F', standard: 'ERC-1155', description: 'A token that can be used for in-game items, digital collectibles, and tokenized assets.', fireblocks: true, isEVM: true },
      { id: 'ripple-realestate', name: 'Ripple token', standard: 'Ripple', description: 'A template for creating a token on the Ripple blockchain.', fireblocks: false, isEVM: false }
    ],
    'real-world-asset': [
      { id: 'erc20f-rwa', name: 'Upgradeable ERC-20F', standard: 'ERC-20', description: 'A fungible token that can be used as a unit of account, for issuing stablecoins, or for fundraising.', fireblocks: true, isEVM: true },
      { id: 'erc721f-rwa', name: 'Upgradeable ERC-721F', standard: 'ERC-721', description: 'A token used for creating unique digital assets, including collectibles, artworks, and in-game items.', fireblocks: true, isEVM: true },
      { id: 'erc1155f-rwa', name: 'Upgradeable ERC-1155F', standard: 'ERC-1155', description: 'A token that can be used for in-game items, digital collectibles, and tokenized assets.', fireblocks: true, isEVM: true },
      { id: 'ripple-rwa', name: 'Ripple token', standard: 'Ripple', description: 'A template for creating a token on the Ripple blockchain.', fireblocks: false, isEVM: false }
    ],
    utility: [
      { id: 'collectible-token', name: 'Collectible Token', standard: 'ERC-721', description: 'Simple, fast and convenient NFT generator. Allow NFT buyers to mint your NFTs', fireblocks: false, isEVM: true },
      { id: 'full-feature-token', name: 'Full-feature token', standard: 'ERC-20, ERC-1400', description: 'A universal token that can be minted, burned, paused, and more.', fireblocks: false, isEVM: true },
      { id: 'nft-collection', name: 'NFT Collection', standard: 'ERC-721', description: 'A contract for creating non-fungible token (NFT) collections.', fireblocks: false, isEVM: true },
      { id: 'cmta-token', name: 'CMTA token', standard: 'ERC-20', description: 'A framework enabling the tokenization of securities in compliance with Swiss law.', fireblocks: false, isEVM: true, publisher: 'CMTA' },
      { id: 'ripple-utility', name: 'Ripple token', standard: 'Ripple', description: 'A template for creating a token on the Ripple blockchain.', fireblocks: false, isEVM: false }
    ],
    art: [
      { id: 'erc721f-art', name: 'Upgradeable ERC-721F', standard: 'ERC-721', description: 'A token used for creating unique digital assets, including collectibles, artworks, and in-game items.', fireblocks: true, isEVM: true },
      { id: 'erc1155f-art', name: 'Upgradeable ERC-1155F', standard: 'ERC-1155', description: 'A token that can be used for in-game items, digital collectibles, and tokenized assets.', fireblocks: true, isEVM: true },
      { id: 'nft-collection-art', name: 'NFT Collection', standard: 'ERC-721', description: 'A contract for creating non-fungible token (NFT) collections.', fireblocks: false, isEVM: true }
    ],
    loyalty: [
      { id: 'erc20f-loyalty', name: 'Upgradeable ERC-20F', standard: 'ERC-20', description: 'A fungible token that can be used as a unit of account, for issuing stablecoins, or for fundraising.', fireblocks: true, isEVM: true },
      { id: 'erc721f-loyalty', name: 'Upgradeable ERC-721F', standard: 'ERC-721', description: 'A token used for creating unique digital assets, including collectibles, artworks, and in-game items.', fireblocks: true, isEVM: true },
      { id: 'erc1155f-loyalty', name: 'Upgradeable ERC-1155F', standard: 'ERC-1155', description: 'A token that can be used for in-game items, digital collectibles, and tokenized assets.', fireblocks: true, isEVM: true },
      { id: 'stellar-token', name: 'Stellar token', standard: 'Stellar', description: 'A template for creating a token on the Stellar blockchain.', fireblocks: false, isEVM: false },
      { id: 'ripple-token', name: 'Ripple token', standard: 'Ripple', description: 'A template for creating a token on the Ripple blockchain.', fireblocks: false, isEVM: false }
    ],
    other: [
      { id: 'collectible-token-other', name: 'Collectible Token', standard: 'ERC-721', description: 'Simple, fast and convenient NFT generator. Allow NFT buyers to mint your NFTs', fireblocks: false, isEVM: true },
      { id: 'full-feature-token-other', name: 'Full-feature token', standard: 'ERC-20, ERC-1400', description: 'A universal token that can be minted, burned, paused, and more.', fireblocks: false, isEVM: true },
      { id: 'nft-collection-other', name: 'NFT Collection', standard: 'ERC-721', description: 'A contract for creating non-fungible token (NFT) collections.', fireblocks: false, isEVM: true },
      { id: 'cmta-token-other', name: 'CMTA token', standard: 'ERC-20', description: 'A framework enabling the tokenization of securities in compliance with Swiss law.', fireblocks: false, isEVM: true, publisher: 'CMTA' },
      { id: 'erc20f-securities', name: 'Upgradeable ERC-20F', standard: 'ERC-20', description: 'A fungible token that can be used as a unit of account, for issuing stablecoins, or for fundraising.', fireblocks: true, isEVM: true },
      { id: 'erc721f-securities', name: 'Upgradeable ERC-721F', standard: 'ERC-721', description: 'A token used for creating unique digital assets, including collectibles, artworks, and in-game items.', fireblocks: true, isEVM: true },
      { id: 'erc1155f-securities', name: 'Upgradeable ERC-1155F', standard: 'ERC-1155', description: 'A token that can be used for in-game items, digital collectibles, and tokenized assets.', fireblocks: true, isEVM: true },
      { id: 'token-utilities', name: 'Token utilities', standard: 'ERC-20, ERC-1400', description: 'Use to carry out a function with your tokens.', fireblocks: false, isEVM: true },
      { id: 'allowlist', name: 'Allowlist', standard: 'Utility', description: 'A utility that adds allowlist functionality to Fireblocks token contracts.', fireblocks: true, isEVM: true },
      { id: 'denylist', name: 'Denylist', standard: 'Utility', description: 'A utility that adds denylist functionality to Fireblocks token contracts.', fireblocks: true, isEVM: true },
      { id: 'stellar-token-other', name: 'Stellar token', standard: 'Stellar', description: 'A template for creating a token on the Stellar blockchain.', fireblocks: false, isEVM: false },
      { id: 'ripple-token-other', name: 'Ripple token', standard: 'Ripple', description: 'A template for creating a token on the Ripple blockchain.', fireblocks: false, isEVM: false },
      { id: 'solana-token-other', name: 'Solana Token 2022', standard: 'Token-2022', description: 'A fungible token with advanced features for customizable asset management.', fireblocks: false, isEVM: false },
      { id: 'ripple-other', name: 'Ripple token', standard: 'Ripple', description: 'A template for creating a token on the Ripple blockchain.', fireblocks: false, isEVM: false }
    ]
  };
  
  // Template details
  const templateDetails = {
    erc20f: {
      description: 'A fungible token that can be used as a unit of account, for issuing stablecoins, or for fundraising.',
      useCases: ['Stablecoins', 'Unit of account', 'Fundraising'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    solana: {
      description: 'A fungible token with advanced features for customizable asset management.',
      useCases: ['Fast settlement', 'High throughput', 'Low fees'],
      publisher: 'Solana Foundation',
      auditBadge: false
    },
    'erc20f-commodity': {
      description: 'A fungible token that can be used as a unit of account, for issuing stablecoins, or for fundraising.',
      useCases: ['Commodity tokenization', 'Trading', 'Fractional ownership'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'erc721f-commodity': {
      description: 'A token used for creating unique digital assets, including collectibles, artworks, and in-game items.',
      useCases: ['Unique commodities', 'Collectibles', 'Certificates'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'erc1155f-commodity': {
      description: 'A token that can be used for in-game items, digital collectibles, and tokenized assets.',
      useCases: ['Batch transfers', 'Multiple commodities', 'Efficient trading'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'erc20f-realestate': {
      description: 'A fungible token that can be used as a unit of account, for issuing stablecoins, or for fundraising.',
      useCases: ['Real estate fractions', 'Property investment', 'REIT tokens'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'erc721f-realestate': {
      description: 'A token used for creating unique digital assets, including collectibles, artworks, and in-game items.',
      useCases: ['Property deeds', 'Unique properties', 'Real estate NFTs'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'erc1155f-realestate': {
      description: 'A token that can be used for in-game items, digital collectibles, and tokenized assets.',
      useCases: ['Property portfolios', 'Mixed developments', 'Batch operations'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'erc20f-rwa': {
      description: 'A fungible token that can be used as a unit of account, for issuing stablecoins, or for fundraising.',
      useCases: ['Asset tokenization', 'Fractional ownership', 'Investment tokens'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'erc721f-rwa': {
      description: 'A token used for creating unique digital assets, including collectibles, artworks, and in-game items.',
      useCases: ['Unique assets', 'Certificates', 'Ownership proofs'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'erc1155f-rwa': {
      description: 'A token that can be used for in-game items, digital collectibles, and tokenized assets.',
      useCases: ['Asset portfolios', 'Batch transfers', 'Mixed assets'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'collectible-token': {
      description: 'Simple, fast and convenient NFT generator. Allow NFT buyers to mint your NFTs',
      useCases: ['NFT collections', 'Digital art', 'Collectibles'],
      publisher: 'OpenZeppelin',
      auditBadge: true
    },
    'full-feature-token': {
      description: 'A universal token that can be minted, burned, paused, and more.',
      useCases: ['Utility tokens', 'Governance', 'Advanced features'],
      publisher: 'OpenZeppelin',
      auditBadge: true
    },
    'nft-collection': {
      description: 'A contract for creating non-fungible token (NFT) collections.',
      useCases: ['NFT series', 'Collections', 'Limited editions'],
      publisher: 'OpenZeppelin',
      auditBadge: true
    },
    'cmta-token': {
      description: 'A framework enabling the tokenization of securities in compliance with Swiss law.',
      useCases: ['Securities', 'Compliance', 'Swiss regulations'],
      publisher: 'CMTA',
      auditBadge: true
    },
    'erc721f-art': {
      description: 'A token used for creating unique digital assets, including collectibles, artworks, and in-game items.',
      useCases: ['Digital art', 'Artworks', 'Creative assets'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'erc1155f-art': {
      description: 'A token that can be used for in-game items, digital collectibles, and tokenized assets.',
      useCases: ['Art editions', 'Multiple copies', 'Art collections'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'nft-collection-art': {
      description: 'A contract for creating non-fungible token (NFT) collections.',
      useCases: ['Art collections', 'Gallery pieces', 'Artist portfolios'],
      publisher: 'OpenZeppelin',
      auditBadge: true
    },
    'erc20f-loyalty': {
      description: 'A fungible token that can be used as a unit of account, for issuing stablecoins, or for fundraising.',
      useCases: ['Loyalty points', 'Rewards', 'Customer programs'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'erc721f-loyalty': {
      description: 'A token used for creating unique digital assets, including collectibles, artworks, and in-game items.',
      useCases: ['Loyalty tiers', 'Membership cards', 'VIP access'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'erc1155f-loyalty': {
      description: 'A token that can be used for in-game items, digital collectibles, and tokenized assets.',
      useCases: ['Multi-tier rewards', 'Batch rewards', 'Loyalty programs'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'stellar-token': {
      description: 'A template for creating a token on the Stellar blockchain.',
      useCases: ['Cross-border payments', 'Fast transactions', 'Low fees'],
      publisher: 'Stellar Foundation',
      auditBadge: false
    },
    'ripple-token': {
      description: 'A template for creating a token on the Ripple blockchain.',
      useCases: ['Payment solutions', 'Banking integration', 'Remittances'],
      publisher: 'Ripple Labs',
      auditBadge: false
    },
    'token-utilities': {
      description: 'Use to carry out a function with your tokens.',
      useCases: ['Token functions', 'Utilities', 'Advanced features'],
      publisher: 'Fireblocks',
      auditBadge: false
    },
    'allowlist': {
      description: 'A utility that adds allowlist functionality to Fireblocks token contracts.',
      useCases: ['Access control', 'Whitelisting', 'Restricted access'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    'denylist': {
      description: 'A utility that adds denylist functionality to Fireblocks token contracts.',
      useCases: ['Blacklisting', 'Compliance', 'Risk management'],
      publisher: 'Fireblocks',
      auditBadge: true
    },
    // Additional Ripple templates
    'ripple-stablecoin': {
      description: 'A template for creating a token on the Ripple blockchain.',
      useCases: ['Payment solutions', 'Banking integration', 'Remittances'],
      publisher: 'Ripple Labs',
      auditBadge: false
    },
    'ripple-commodity': {
      description: 'A template for creating a token on the Ripple blockchain.',
      useCases: ['Payment solutions', 'Banking integration', 'Remittances'],
      publisher: 'Ripple Labs',
      auditBadge: false
    },
    'ripple-realestate': {
      description: 'A template for creating a token on the Ripple blockchain.',
      useCases: ['Payment solutions', 'Banking integration', 'Remittances'],
      publisher: 'Ripple Labs',
      auditBadge: false
    },
    'ripple-rwa': {
      description: 'A template for creating a token on the Ripple blockchain.',
      useCases: ['Payment solutions', 'Banking integration', 'Remittances'],
      publisher: 'Ripple Labs',
      auditBadge: false
    },
    'ripple-utility': {
      description: 'A template for creating a token on the Ripple blockchain.',
      useCases: ['Payment solutions', 'Banking integration', 'Remittances'],
      publisher: 'Ripple Labs',
      auditBadge: false
    },
    'ripple-other': {
      description: 'A template for creating a token on the Ripple blockchain.',
      useCases: ['Payment solutions', 'Banking integration', 'Remittances'],
      publisher: 'Ripple Labs',
      auditBadge: false
    }
  };
  
  // Token deployers
  const tokenDeployers = [
    { id: 'fireblocks', name: 'Fireblocks' },
    { id: 'alchemy', name: 'Alchemy' },
    { id: 'infura', name: 'Infura' },
    { id: 'quicknode', name: 'QuickNode' }
  ];

  const steps = ['Select Asset', 'Choose Template', 'Template Details', 'Setup'];
  
  // Handle navigation between steps
  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Handle asset selection
  const handleAssetSelect = (event) => {
    setSelectedAsset(event.target.value);
    setSelectedTemplate(''); // Reset template when asset changes
    if (event.target.value !== 'other') {
      setCustomAssetName(''); // Reset custom name if not "other"
    }
  };
  
  // Handle custom asset name change
  const handleCustomAssetNameChange = (event) => {
    setCustomAssetName(event.target.value);
  };
  
  // Get asset display name
  const getAssetDisplayName = () => {
    if (selectedAsset === 'other' && customAssetName) {
      return customAssetName;
    }
    const allAssets = [...financialAssets, ...nonFinancialAssets];
    const asset = allAssets.find(a => a.id === selectedAsset);
    return asset ? asset.name : '';
  };
  
  // Handle template selection
  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    // Auto-advance to next step when template is selected
    setTimeout(() => {
      goToNextStep();
    }, 300); // Small delay for better UX
  };
  
  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle network toggle
  const handleNetworkToggle = (event) => {
    setFormData({
      ...formData,
      network: event.target.checked ? 'testnet' : 'mainnet',
      selectedNetwork: event.target.checked ? '' : 'ethereum' // Reset selectedNetwork when switching
    });
  };
  
  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 
          financialAssets={financialAssets} 
          nonFinancialAssets={nonFinancialAssets}
          selectedAsset={selectedAsset}
          onSelectAsset={handleAssetSelect}
          onNext={goToNextStep}
          customAssetName={customAssetName}
          onCustomAssetNameChange={handleCustomAssetNameChange}
        />;
      case 1:
        return <Step2 
          templates={templates[selectedAsset] || []}
          selectedTemplate={selectedTemplate}
          onSelectTemplate={handleTemplateSelect}
          assetDisplayName={getAssetDisplayName()}
        />;
      case 2:
        return <Step3 
          templateDetails={templateDetails[selectedTemplate]}
          onNext={goToNextStep}
        />;
      case 3:
        return <Step4 
          formData={formData}
          tokenDeployers={tokenDeployers}
          selectedTemplate={selectedTemplate}
          onInputChange={handleInputChange}
          onNetworkToggle={handleNetworkToggle}
          onNext={onClose}
        />;
      default:
        return <Step1 />;
    }
  };
  
  return (
    <Drawer 
      key={componentKey}
      anchor="bottom" 
      open={open} 
      onClose={onClose} 
      transitionDuration={400}
      PaperProps={{ 
        sx: { 
          borderTopLeftRadius: 16, 
          borderTopRightRadius: 16, 
          minHeight: '80vh',
          maxHeight: '95vh', 
          overflow: 'auto' 
        } 
      }}
    >
      <Container maxWidth={false} sx={{ py: 3, px: { xs: 2, sm: 4, md: 8 } }}>
        <Box sx={{ position: 'relative', mb: 3 }}>
          <Box sx={{ position: 'absolute', right: -16, top: -8, display: 'flex', gap: 1 }}>
            {currentStep > 0 && (
              <IconButton 
                onClick={goToPreviousStep}
                sx={{ 
                  bgcolor: 'grey.100',
                  '&:hover': { bgcolor: 'grey.200' }
                }}
              >
                <ArrowBackIcon />
              </IconButton>
            )}
            <IconButton 
              onClick={onClose} 
              sx={{ 
                bgcolor: 'grey.100',
                '&:hover': { bgcolor: 'grey.200' }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
            Create Asset
          </Typography>
        </Box>
        
        <Divider sx={{ mb: 4 }} />
        
        {/* Progress Bar */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Step {currentStep + 1} of {steps.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={((currentStep + 1) / steps.length) * 100}
            sx={{ 
              height: 8, 
              borderRadius: 4,
              bgcolor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4
              }
            }}
          />
          <Typography variant="h6" sx={{ mt: 2, textAlign: 'center', color: 'primary.main' }}>
            {steps[currentStep]}
          </Typography>
        </Box>
        
        {/* Current step content */}
        {renderStep()}
      </Container>
    </Drawer>
  );
};

// Step 1: Select Asset Type
const Step1 = ({ financialAssets, nonFinancialAssets, selectedAsset, onSelectAsset, onNext, customAssetName, onCustomAssetNameChange }) => {
  const renderAssetCard = (asset) => {
    const IconComponent = asset.icon;
    return (
      <Card 
        key={asset.id}
        variant="outlined"
        sx={{ 
          cursor: asset.disabled ? 'not-allowed' : 'pointer',
          opacity: asset.disabled ? 0.5 : 1,
          border: selectedAsset === asset.id ? 2 : 1,
          borderColor: selectedAsset === asset.id ? 'primary.main' : 'divider',
          '&:hover': asset.disabled ? {} : {
            borderColor: 'primary.light',
            boxShadow: 2
          }
        }}
      >
        <CardContent sx={{ py: 2 }}>
          <FormControlLabel
            value={asset.id}
            control={<Radio disabled={asset.disabled} />}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconComponent sx={{ fontSize: 24, color: 'primary.main' }} />
                <Typography variant="body1" fontWeight="medium">
                  {asset.name}
                </Typography>
              </Box>
            }
            sx={{ margin: 0, width: '100%' }}
          />
        </CardContent>
      </Card>
    );
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Stack spacing={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <AccountBalanceIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          <Typography variant="h5" fontWeight="bold">
            Step 1: Select Asset Type
          </Typography>
        </Box>
        
        <FormControl component="fieldset">
          <RadioGroup value={selectedAsset} onChange={onSelectAsset}>
            <Grid container spacing={3}>
              {/* Financial Assets Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary', fontWeight: 'medium' }}>
                  Financial Assets
                </Typography>
                <Stack spacing={2}>
                  {financialAssets.map(renderAssetCard)}
                </Stack>
              </Grid>
              
              {/* Non-Financial Assets Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary', fontWeight: 'medium' }}>
                  Non-Financial Assets
                </Typography>
                <Stack spacing={2}>
                  {nonFinancialAssets.map(renderAssetCard)}
                </Stack>
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
        
        {/* Custom Asset Name Input for "Other" */}
        {selectedAsset === 'other' && (
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Other non-financial asset"
              placeholder="Enter custom asset type name"
              value={customAssetName}
              onChange={onCustomAssetNameChange}
              variant="outlined"
              helperText="Specify the type of asset you want to tokenize"
            />
          </Box>
        )}
        
        {/* Navigation buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="contained"
            onClick={onNext}
            disabled={!selectedAsset || (selectedAsset === 'other' && !customAssetName.trim())}
            size="large"
            sx={{ px: 8, minWidth: 220 }}
          >
            Continue
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};

// Step 2: Choose Token Template
const Step2 = ({ templates, selectedTemplate, onSelectTemplate, assetDisplayName }) => {
  // Debug log to check templates
  console.log('Step2 templates:', templates);
  console.log('Asset display name:', assetDisplayName);
  
  // Categorize templates into EVM and non-EVM
  const evmTemplates = templates.filter(template => template.isEVM);
  const nonEvmTemplates = templates.filter(template => !template.isEVM);

  const renderTemplateCard = (template) => (
    <Grid item xs={12} md={6} key={template.id}>
      <Card 
        variant="outlined"
        sx={{ 
          cursor: 'pointer',
          height: '100%',
          border: selectedTemplate === template.id ? 2 : 1,
          borderColor: selectedTemplate === template.id ? 'primary.main' : 'divider',
          '&:hover': {
            borderColor: 'primary.light',
            boxShadow: 3
          }
        }}
        onClick={() => onSelectTemplate(template.id)}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {template.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Standard: {template.standard}
              </Typography>
            </Box>
            {template.fireblocks && (
              <Chip 
                label="Fireblocks" 
                size="small" 
                color="primary" 
                variant="outlined"
              />
            )}
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {template.description}
          </Typography>
          <Button 
            variant={selectedTemplate === template.id ? "contained" : "outlined"}
            fullWidth
            size="small"
          >
            {selectedTemplate === template.id ? 'Selected' : 'Use this contract'}
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Stack spacing={4}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <TokenIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          <Typography variant="h5" fontWeight="bold">
            Step 2: Choose {assetDisplayName ? `${assetDisplayName} ` : ''}Template
          </Typography>
        </Box>
        
        {templates.length > 0 ? (
          <>
            {/* EVM Templates Section */}
            {evmTemplates.length > 0 && (
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <MemoryIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                  <Typography variant="h6" fontWeight="bold" color="primary.main">
                    EVM Compatible
                  </Typography>
                  <Chip 
                    label={`${evmTemplates.length} template${evmTemplates.length > 1 ? 's' : ''}`}
                    size="small" 
                    color="primary" 
                    variant="outlined"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Ethereum Virtual Machine compatible tokens (Ethereum, Polygon, BSC, etc.)
                </Typography>
                <Grid container spacing={3}>
                  {evmTemplates.map(renderTemplateCard)}
                </Grid>
              </Box>
            )}

            {/* Non-EVM Templates Section */}
            {nonEvmTemplates.length > 0 && (
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <CloudQueueIcon sx={{ fontSize: 24, color: 'secondary.main' }} />
                  <Typography variant="h6" fontWeight="bold" color="secondary.main">
                    Non-EVM
                  </Typography>
                  <Chip 
                    label={`${nonEvmTemplates.length} template${nonEvmTemplates.length > 1 ? 's' : ''}`}
                    size="small" 
                    color="secondary" 
                    variant="outlined"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Alternative blockchain protocols (Solana, XRP, Cardano, etc.)
                </Typography>
                <Grid container spacing={3}>
                  {nonEvmTemplates.map(renderTemplateCard)}
                </Grid>
              </Box>
            )}
          </>
        ) : (
          <Alert severity="info" sx={{ my: 3 }}>
            <Typography variant="h6">No templates available</Typography>
            <Typography>Please select an asset type in the previous step.</Typography>
          </Alert>
        )}
      </Stack>
    </Paper>
  );
};

// Step 3: Token Template Details
const Step3 = ({ templateDetails, onNext }) => {
  if (!templateDetails) {
    return (
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Alert severity="warning">
          <Typography variant="h6">No template selected</Typography>
          <Typography>Please select a template in the previous step.</Typography>
        </Alert>
      </Paper>
    );
  }
  
  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Stack spacing={4}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <PaletteIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          <Typography variant="h5" fontWeight="bold">
            Step 3: Template Details
          </Typography>
        </Box>
        
        <Card variant="outlined" sx={{ p: 3 }}>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                <DescriptionIcon fontSize="small" /> Description
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {templateDetails.description}
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <StarsIcon fontSize="small" /> Supported Use Cases
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {templateDetails.useCases.map((useCase, index) => (
                  <Chip 
                    key={index}
                    label={useCase}
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                ))}
              </Box>
            </Box>
            
            <Box>
              <Typography variant="h6" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                <BusinessIcon fontSize="small" /> Publisher
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {templateDetails.publisher}
              </Typography>
            </Box>
            
            {templateDetails.auditBadge && (
              <Box>
                <Typography variant="h6" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <SecurityIcon fontSize="small" /> Security
                </Typography>
                <Chip 
                  icon={<VerifiedIcon />}
                  label="OpenZeppelin Audit"
                  color="success"
                  variant="outlined"
                />
              </Box>
            )}
          </Stack>
        </Card>
        
        {/* Navigation buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="contained"
            onClick={onNext}
            size="large"
            sx={{ px: 4 }}
          >
            Continue
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};

// Step 4: Token Setup Form
const Step4 = ({ formData, tokenDeployers, selectedTemplate, onInputChange, onNetworkToggle, onNext }) => {
  // Check if it's a Ripple template
  const isRippleTemplate = selectedTemplate && selectedTemplate.includes('ripple');
  
  // Network options for testnet
  const testnetNetworks = [
    { id: 'eth_test6', name: 'ETH_TEST6', icon: '🔷' },
    { id: 'amoy_polygon_test', name: 'AMOY_POLYGON_TEST', icon: '🟣' },
    { id: 'bsc_test', name: 'BSC_TEST', icon: '🟡' },
    { id: 'opt_sepolia', name: 'OPT_SEPOLIA', icon: '🔴' },
    { id: 'avalanche_fuji', name: 'AVALANCHE_FUJI', icon: '🔺' },
    { id: 'basechain_eth_test5', name: 'BASECHAIN_ETH_TEST5', icon: '🔵' },
    { id: 'eth_test5', name: 'ETH_TEST5', icon: '🔷' },
    { id: 'arb_sepolia', name: 'ARB_SEPOLIA', icon: '🔶' }
  ];

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Stack spacing={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <SettingsIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          <Typography variant="h5" fontWeight="bold">
            Step 4: Token Setup
          </Typography>
        </Box>
        
        <Card variant="outlined" sx={{ p: 3 }}>
          <Stack spacing={3}>
            {/* Network Toggle */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">Network</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" color={formData.network === 'mainnet' ? 'primary.main' : 'text.secondary'}>
                  Mainnet
                </Typography>
                <Switch
                  checked={formData.network === 'testnet'}
                  onChange={onNetworkToggle}
                  color="primary"
                />
                <Typography variant="body2" color={formData.network === 'testnet' ? 'primary.main' : 'text.secondary'}>
                  Testnet
                </Typography>
              </Box>
            </Box>

            {/* Network Selection */}
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Network
              </Typography>
              {isRippleTemplate ? (
                // For Ripple templates, show fixed Ripple
                <Box sx={{ 
                  p: 2, 
                  border: '1px solid', 
                  borderColor: 'divider', 
                  borderRadius: 1, 
                  bgcolor: 'grey.50',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <Box sx={{ 
                    width: 24, 
                    height: 24, 
                    borderRadius: '50%', 
                    bgcolor: '#346AA9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    R
                  </Box>
                  <Typography variant="body1" fontWeight="medium">
                    Ripple
                  </Typography>
                </Box>
              ) : (
                // For other templates, show network dropdown
                <FormControl fullWidth>
                  <Select
                    name="selectedNetwork"
                    value={formData.selectedNetwork || ''}
                    onChange={onInputChange}
                    displayEmpty
                    disabled={formData.network === 'mainnet'}
                    sx={{ 
                      bgcolor: formData.network === 'mainnet' ? 'grey.100' : 'background.paper'
                    }}
                  >
                    <MenuItem value="" disabled>
                      <Typography color="text.secondary">Choose a network</Typography>
                    </MenuItem>
                    {formData.network === 'mainnet' ? (
                      <MenuItem value="ethereum">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ 
                            width: 24, 
                            height: 24, 
                            borderRadius: '50%', 
                            bgcolor: '#627EEA',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            color: 'white',
                            fontWeight: 'bold'
                          }}>
                            E
                          </Box>
                          <Typography>Ethereum</Typography>
                        </Box>
                      </MenuItem>
                    ) : (
                      testnetNetworks.map(network => (
                        <MenuItem key={network.id} value={network.id}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box sx={{ 
                              width: 24, 
                              height: 24, 
                              borderRadius: '50%', 
                              bgcolor: '#627EEA',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '12px',
                              color: 'white',
                              fontWeight: 'bold'
                            }}>
                              {network.icon}
                            </Box>
                            <Typography>{network.name}</Typography>
                          </Box>
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </FormControl>
              )}
            </Box>
            
            <Grid container spacing={3}>
              {/* Token Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Token Name"
                  name="tokenName"
                  value={formData.tokenName}
                  onChange={onInputChange}
                  placeholder="Enter token name"
                  variant="outlined"
                />
              </Grid>
              
              {/* Symbol */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Symbol"
                  name="tokenSymbol"
                  value={formData.tokenSymbol}
                  onChange={onInputChange}
                  placeholder="Enter token symbol"
                  variant="outlined"
                />
              </Grid>
              
              {/* Default Admin */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Default Admin"
                  name="adminAddress"
                  value={formData.adminAddress}
                  onChange={onInputChange}
                  placeholder="Enter default admin address"
                  variant="outlined"
                />
              </Grid>
              
              {/* Minter */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Minter"
                  name="minterAddress"
                  value={formData.minterAddress}
                  onChange={onInputChange}
                  placeholder="Enter minter address"
                  variant="outlined"
                />
              </Grid>
              
              {/* Pauser */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Pauser"
                  name="pauserAddress"
                  value={formData.pauserAddress}
                  onChange={onInputChange}
                  placeholder="Enter pauser address"
                  variant="outlined"
                />
              </Grid>
              
              {/* Token Deployer */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Token Deployer</InputLabel>
                  <Select
                    name="tokenDeployer"
                    value={formData.tokenDeployer}
                    onChange={onInputChange}
                    label="Token Deployer"
                  >
                    {tokenDeployers.map(deployer => (
                      <MenuItem key={deployer.id} value={deployer.id}>
                        {deployer.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Stack>
        </Card>
        
        {/* Navigation buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="contained"
            onClick={onNext}
            size="large"
            sx={{ px: 4 }}
            color="success"
          >
            Create Asset
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};

export { CreateAssetModal as default }; 