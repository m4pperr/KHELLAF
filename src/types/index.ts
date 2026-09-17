export interface ScheduleDay {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface ClinicInfo {
  name: string;
  subtitle: string;
  doctor: string;
  doctorTitle: string;
  doctorBio: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    wilaya: string;
    country: string;
    fullFormatted: string;
    landmark: string;
  };
  phones: string[];
  phonesFormatted: string[];
  email: string;
  socials: {
    facebook: string;
    instagram: string;
  };
  googleMapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  schedule: ScheduleDay[];
}

export interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Spécialité' | 'Aligneurs' | 'Interception' | 'Esthétique';
  benefits: string[];
  durationApprox: string;
  recommendedFor: string;
  iconName: string;
}

export interface PatientStep {
  number: string;
  title: string;
  description: string;
  badge?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  comment: string;
  tag: string;
  date?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  patientAge: string;
  treatment: string;
  duration: string;
  description: string;
  results: string[];
  badge: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  patientType: 'nouveau' | 'deja-patient';
  serviceId: string;
  preferredDate: string;
  preferredTimeSlot: 'matin' | 'apres-midi';
  notes: string;
}
