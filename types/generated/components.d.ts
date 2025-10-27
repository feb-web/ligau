import type { Schema, Struct } from '@strapi/strapi';

export interface MediaMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_media';
  info: {
    displayName: 'Media';
    icon: 'landscape';
  };
  attributes: {
    richtext: Schema.Attribute.RichText;
  };
}

export interface MediaQuote extends Struct.ComponentSchema {
  collectionName: 'components_media_quotes';
  info: {
    displayName: 'Quote';
    icon: 'italic';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'media.media': MediaMedia;
      'media.quote': MediaQuote;
    }
  }
}
