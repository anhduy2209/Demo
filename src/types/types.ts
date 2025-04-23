import React from "react";

export type NavbarItem = {
  title: string;
  description: string;
  icon: React.ElementType
}

export type SidebarContextType = {
  expanded: boolean;
};

export type SidebarItemProps = {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
};

export interface FormData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  contractNumber: string;
  contractDate: string;
  contractValue: string;
  contractDescription: string;
}

export interface FormErrors {
  [key: string]: string | undefined;
}
