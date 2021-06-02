module.exports = {
  title: 'Mackerel-Twilio HandsOn',
  description: 'This is the procedure page used in Mackerel Hands-On Seminar.',
  dest: 'docs/',
  base: '/mackerel-twilio-handson/',
  themeConfig: {
    sidebar: [
      {
        title: '目次',
        collapsable: false,
        children: [
          '/',
          '/01_signup/',
          '/02_install_agent/',
          '/03_service_role/',
          '/04_monitors/',
          '/05_metric_plugins/',
          '/06_check_plugins/',
          '/07_notification/',
          '/08_twilio/',
        ]
      },
    ],
  }
}