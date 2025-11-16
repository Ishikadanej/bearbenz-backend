import { defineField, defineType } from 'sanity'

export const promoBannerType = defineType({
  name: 'promoBanner',
  title: 'Promo Banner',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'banners',
      title: 'Banners',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'banner',
          title: 'Banner',
          fields: [

            defineField({
              name: 'buttonLink',
              title: 'Button Link',
              type: 'url',
            }),
            defineField({
              name: 'image',
              title: 'Banner Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),

          ],
        },
      ],
      validation: (rule) => rule.min(1).error('At least one banner is required.'),
    }),
  ],
})
