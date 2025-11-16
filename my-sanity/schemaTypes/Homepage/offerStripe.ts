import { defineField, defineType } from 'sanity';

export const offers = defineType({
  name: 'offers',
  title: 'Offers / Announcements',
  type: 'document',
  fields: [
    defineField({
      name: 'message',
      title: 'Offer Message',
      type: 'string',
      validation: (rule) => rule.required().min(5).max(200),
    }),

    defineField({
      name: 'link',
      title: 'Redirect Link (Optional)',
      type: 'string',
      description: 'Example: /products, /offers, /category/winter',
    }),

    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'startDate',
      title: 'Start Date (Optional)',
      type: 'datetime',
    }),

    defineField({
      name: 'endDate',
      title: 'End Date (Optional)',
      type: 'datetime',
    }),

    defineField({
      name: 'priority',
      title: 'Priority (Offer Order)',
      type: 'number',
      description: 'Lower number shows earlier',
      initialValue: 1,
    }),
  ],
});
