export enum SelectedPage {
    Home = "home",
    Benefits = "benefícios",
    OurClasses = "nossasaulas",
    ContactUs = "contate-nos",
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string
  }