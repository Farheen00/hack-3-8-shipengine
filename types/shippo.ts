export interface TrackingStatus {
    status: string;
    details: string;
    date: string;
  }
  
  export interface TrackingHistory {
    status: TrackingStatus;
    location: {
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    timestamp: string;
  }
  
  export interface TrackingResponse {
    tracking_number: string;
    carrier: string;
    address_from: {
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    address_to: {
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    tracking_status: TrackingStatus;
    tracking_history: TrackingHistory[];
  }