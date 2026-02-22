declare module "react-simple-maps" {
  import { ComponentType, ReactNode, CSSProperties } from "react";

  interface ProjectionConfig {
    scale?: number;
    center?: [number, number];
    rotate?: [number, number, number];
    parallels?: [number, number];
  }

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    className?: string;
    children?: ReactNode;
  }

  interface GeographiesChildrenProps {
    geographies: GeographyType[];
  }

  interface GeographiesProps {
    geography: string | object;
    children: (props: GeographiesChildrenProps) => ReactNode;
  }

  interface GeographyStyleConfig {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    cursor?: string;
    transition?: string;
    outline?: string;
  }

  interface GeographyType {
    rsmKey: string;
    properties: Record<string, string>;
    type: string;
    geometry: object;
  }

  interface GeographyProps {
    geography: GeographyType;
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
    onMouseMove?: (event: React.MouseEvent) => void;
    onClick?: (event: React.MouseEvent) => void;
    style?: {
      default?: GeographyStyleConfig;
      hover?: GeographyStyleConfig;
      pressed?: GeographyStyleConfig;
    };
    className?: string;
    fill?: string;
    stroke?: string;
  }

  interface MarkerProps {
    coordinates: [number, number];
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
    onClick?: (event: React.MouseEvent) => void;
    children?: ReactNode;
    className?: string;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const ZoomableGroup: ComponentType<{
    zoom?: number;
    center?: [number, number];
    children?: ReactNode;
    className?: string;
  }>;
}
