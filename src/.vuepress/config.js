module.exports = {
  title: 'Mackerel-Twilio HandsOn',
  description: 'This is the procedure page used in Mackerel Hands-On Seminar.',
  dest: 'docs/',
  base: '/mackerel-twilio-handson/',
  themeConfig: {
    sidebar: [
      {
        title: 'Mackerelハンズオン',
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
          // '/09_extra/',
          '/16_retire_host/',
        ]
      },
      {
        title: 'Twilioとの連携',
        collapsable: false,
        children: [
          '/10_twilio_overview/',
          '/11_twilio_signup/',
          '/12_twilio_phone_number/',
          '/13_twilio_channel/',
          '/14_twilio_twiml/',
          '/15_twilio_remove_phone_number/'
        ]
      },    ],
  }
}