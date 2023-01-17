module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/getting-started',
        'introduction/features',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/introduction',
        'integrations/samples-streaming',
        'integrations/taurus',
        'integrations/jmeter',
        'integrations/locust',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Administration',
          items: ['guides/administration/api-token', 'guides/manual-data-upload', 'guides/api-data-upload'],
        },
        {
          type: 'category',
          label: "Deployment",
          items: ['guides/deployments/aws-ecs-installation',
            'guides/deployments/aws-ec2-installation',
            'guides/deployments/aws-ec2-ssl-configuration',
            'guides/deployments/Azure-Installation',]
        },
        'guides/large-file',

      ],
    },
  ],
};
