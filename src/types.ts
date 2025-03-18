export interface Artist {
  id: number;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  gallery?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  selectedArtist?: string;
}