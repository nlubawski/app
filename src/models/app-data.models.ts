import { AboutSectionData } from "./about-section-data";
import { AddressData } from "./address-data.models";
import { FeaturesSectionData } from "./feactures-section-data.models";

export interface AppData {
    features: FeaturesSectionData;
    about: AboutSectionData;
    address: AddressData;
  };
