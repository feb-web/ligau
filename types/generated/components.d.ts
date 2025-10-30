import type { Schema, Struct } from '@strapi/strapi';

export interface MediaCarrusel extends Struct.ComponentSchema {
  collectionName: 'components_media_carrusels';
  info: {
    displayName: 'Carrusel';
    icon: 'magic';
  };
  attributes: {};
}

export interface MediaMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_media';
  info: {
    displayName: 'Media';
    icon: 'landscape';
  };
  attributes: {};
}

export interface MediaQuote extends Struct.ComponentSchema {
  collectionName: 'components_media_quotes';
  info: {
    displayName: 'Quote';
    icon: 'italic';
  };
  attributes: {};
}

export interface MediaTextoEnriquecido extends Struct.ComponentSchema {
  collectionName: 'components_media_texto_enriquecidos';
  info: {
    displayName: 'Texto Enriquecido';
    icon: 'brush';
  };
  attributes: {
    rich_text: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'media.carrusel': MediaCarrusel;
      'media.media': MediaMedia;
      'media.quote': MediaQuote;
      'media.texto-enriquecido': MediaTextoEnriquecido;
    }
  }
}
