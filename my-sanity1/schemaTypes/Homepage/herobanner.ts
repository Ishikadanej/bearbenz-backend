import { defineType, defineField } from 'sanity'

export const heroBanner = defineType({
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'slide',
          title: 'Slide',
          fields: [
            defineField({
              name: 'ctaLink',
              title: 'CTA Link URL',
              type: 'url',
            }),
            defineField({
              name: 'image',
              title: 'Slide Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),

          ],
        },
      ],
      validation: (rule) => rule.min(1).max(8).error('You must have between 1 and 8 slides.'),
    }),
  ],
})
