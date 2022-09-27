export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
    },
    {
      name: 'schoolImage',
      title: 'SchoolImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'school',
      title: 'School',
      type: 'string',
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    },
    {
      name: 'isCurrentlyLearningHere',
      title: 'IsCurrentlyLearningHere',
      type: 'boolean',
    },
    {
      name: 'gpa',
      title: 'Gpa',
      type: 'number',
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
