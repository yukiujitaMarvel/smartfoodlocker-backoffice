const SITE_DOMAIN = 'https://d2f6p2jlfbmt7m.cloudfront.net/public/'

export default (context, inject) => {
  inject('SITE_DOMAIN', SITE_DOMAIN);
}