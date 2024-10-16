import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "posts",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
  ],
};
