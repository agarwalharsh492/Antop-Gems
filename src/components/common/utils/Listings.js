// Used for API mainly

export const filterImages = (listing, type) => {
  const images = [];
  if (listing && listing.galleryImages && listing.galleryImages.length > 0) {
    listing.galleryImages.map(image => {
      // eslint-disable-line
      if (image.type === type) {
        images.push(image);
      }
    });
  }
  return images;
};

export const constructionStatusHelper = status => {
  const mapping = {
    prelaunch: 'PreLaunch',
    launch: 'Launch',
    under_construction: 'Under Construction',
    rto: 'Ready To Occupy',
    completed: 'Completed'
  };
  return mapping[status];
};

export const possessionDateHelper = (date, string = false) => {
  const unixtime = new Date(date);
  if (new Date().getTime() >= unixtime || date < 0) {
    return 'Ready To Move In';
  }
  let month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const year = unixtime.getFullYear();
  month = month[unixtime.getMonth()];
  if (string) {
    return `Possession by ${month} ${year}`;
  }
  return `${month} ${year}`;
};

export const bankInfo = {
  7: { bank: 'Andhra Bank', icon: 'andhra' },
  4: { bank: 'Axis Bank', icon: 'axis' },
  6: { bank: 'Canara Bank', icon: 'canara' },
  5: { bank: 'DHFL', icon: 'dhfl' },
  3: { bank: 'HDFC', icon: 'hdfc' },
  2: { bank: 'LIC Housing Finance', icon: 'lic' },
  1: { bank: 'SBI', icon: 'sbi' },
  8: { bank: 'ICICI Bank', icon: 'icici' },
  9: { bank: 'Federal Bank', icon: 'federal' },
  10: { bank: 'TATA Capital', icon: 'tata-capital' },
  11: { bank: 'India Bulls', icon: 'indiabulls' },
  12: { bank: 'Vijaya Bank', icon: 'vijaya' },
  13: { bank: 'Indian Bank', icon: 'indian' },
  14: { bank: 'Punjab National Bank', icon: 'pnb' },
  15: { bank: 'IDBI Bank', icon: 'idbi' },
  16: { bank: 'Syndicate Bank', icon: 'syndicate' },
  17: { bank: 'Bank of Baroda', icon: 'bob' },
  18: { bank: 'Bank of India', icon: 'boi' },
  19: { bank: 'Union Bank of India', icon: 'unionbank' },
  20: { bank: 'Central Bank of India', icon: 'centralbank' },
  21: { bank: 'Indian Overseas Bank', icon: 'indianover' },
  22: { bank: 'UCO Bank', icon: 'uco' },
  23: { bank: 'Oriental Bank of Commerce', icon: 'oriental' },
  24: { bank: 'Allahabad Bank', icon: 'allahabad' },
  25: { bank: 'Standard Chartered Bank', icon: 'standard' },
  26: { bank: 'Citibank', icon: 'citybank' },
  27: { bank: 'United Bank of India', icon: 'uboi' },
  28: { bank: 'Dena Bank', icon: 'dena' },
  29: { bank: 'IndusInd Bank Limited', icon: 'indus' },
  30: { bank: 'ING Vysya Bank Limited', icon: 'ing' },
  31: { bank: 'Deutsche Bank', icon: 'deutsche' },
  32: { bank: 'Kotak Mahindra Bank Limited', icon: 'kotak' },
  33: { bank: 'City Union Bank Limited', icon: 'cityunion' },
  34: { bank: 'YES BANK Limited', icon: 'yesbank' },
  35: { bank: 'BNP Paribas', icon: 'bnp' },
  36: { bank: 'Corporation Bank', icon: 'crp' },
  37: { bank: 'Catholic Syrian Bank', icon: 'csb' },
  38: { bank: 'L&T Finance', icon: 'lnt' },
  39: { bank: 'Sundaram Finance', icon: 'sundaram_finance' },
  40: { bank: 'HDFC Home Loans', icon: 'hdfc-home_loans' },
  41: { bank: 'State Bank Of Mysore', icon: 'state-bank_mysore' },
  42: { bank: 'State Bank Of Hyderabad', icon: 'state-bank_hyderabad' },
  43: { bank: 'Sundaram Home Finance', icon: 'sundaram-home_finance' },
  44: { bank: 'State bank Of Travancore', icon: 'state-bank_travancore' },
  45: { bank: 'IIFL', icon: 'iifl' }
};

export const amenitiesHelper = {
  9: { name: '2 Wheeler Parking', icon: 'wheeler' },
  16: { name: 'Badminton Court', icon: 'badminton' },
  17: { name: 'Basketball Court', icon: 'basketball' },
  4: { name: 'Car Parking', icon: 'car' },
  5: { name: "Children's Play Area", icon: 'children' },
  11: { name: 'Clubhouse', icon: 'clubhouse' },
  6: { name: 'Gym', icon: 'gym' },
  22: { name: 'Home Theatre', icon: 'home' },
  24: { name: 'Indoor Games', icon: 'outdoor' },
  15: { name: 'Jogging Track', icon: 'jogging' },
  25: { name: 'Library', icon: 'library' },
  2: { name: 'Lift', icon: 'lift' },
  12: { name: 'Multi-purpose Hall', icon: 'multihall' },
  19: { name: 'Playschool', icon: 'playschool' },
  3: { name: 'Power Backup', icon: 'power' },
  7: { name: 'Rainwater Harvesting', icon: 'rainwater' },
  20: { name: 'RO Plant', icon: 'roplant' },
  1: { name: 'Security', icon: 'security' },
  21: { name: 'Sewage Treatment Plant', icon: 'sewage' },
  23: { name: 'Shopping Area', icon: 'shopping' },
  8: { name: 'Swimming Pool', icon: 'swimming' },
  14: { name: 'Temple', icon: 'temple' },
  18: { name: 'Tennis Court', icon: 'tennis' },
  10: { name: "Visitor's Parking", icon: 'visitor' },
  13: { name: 'Yoga/Meditation Hall', icon: 'yoga' },
  31: { name: 'CCTV', icon: 'cctv' },
  32: { name: 'Intercom', icon: 'intercom' },
  26: { name: 'Black Top Road', icon: 'black-top-road' },
  28: { name: 'Avenue Trees', icon: 'avenue' },
  29: { name: 'Gated Community', icon: 'gated' },
  33: { name: 'IGBC Certified', icon: 'igbc' },
  34: { name: 'Videodoor Phone', icon: 'videodoor' },
  35: { name: 'WiFi', icon: 'wifi' },
  36: { name: 'ATM', icon: 'atm' },
  37: { name: 'Cricket Pitch', icon: 'cricket' },
  38: { name: 'Skating Rink', icon: 'skating' },
  39: { name: 'Departmental Stores', icon: 'departmental-stores' },
  40: { name: 'Pharmacy', icon: 'pharmacy' },
  41: { name: 'Salon', icon: 'salon' },
  42: { name: 'Restaurant 24/7', icon: 'restaurant247' },
  43: { name: 'Buggy Cart', icon: 'buggycart' },
  44: { name: 'Solar Water Heater', icon: 'solar-water-heater' },
  45: {
    name: 'Periodic Anti Termite Treatment',
    icon: 'periodic-anti-termite-treatment'
  }
};
export default { possessionDateHelper };
