# HTTP Headers Notes

My notes on http headers taken from various resources. All resources used will be listed for future reference at the very bottom of the document.

## Headers

### Content-Security-Policy

Restricts network access from a page [doc](https://www.w3c.github.io/webappsec-csp/)

By default, only allows access to the same origin as the page. But allows images to come from anywhere. Media and scripts from a whitelist of specific origins.

### Strict-Transport-Security

Always connect over TLS, even for first request [doc](https:/tools.ietf.org/html/rfc6797)

### Referrer-Policy

What to send in referrals form this page [doc](https://w3c.github.io/webappsec-referrer-policy/)

## Discouraged Headers

### P3P

Machine Readable Privacy policy, [docs](https://www.w3.org/TR/P3P11/)

* Intended as a declaration of privacy policy
* Too hard for users to undestand/use
* Only ever implemented by Internet Explorer, to gate access to third party cookies in IFrames.
  * ...but never validated.
* Commonly set to 'This is not a P3P policy' which satifies the check.

### Expires

Sets expirty time for local caching [docs](https://www.w3.org/)

If a response includes a __Cache-Control__ field witht he max-age directive, a recipient MUST ignore the Expires field. Likewise, if a response includes the s-maxage direciteve, a shared cache recipient MUST ignore the Expires field. In both these cases, the value in Expires is only intended for recipients that have not yet implemented the Cache-Control field.

Why is it __discouraged__? Because most sites that send the Expires Header also send a Cache-Control header with max-age set.

Use:

```HTTP
    Cache-Control: private, no-store
```

Don't use:

```HTTP
Expires: Thu, 01 Dec 1994 16:00:00 GMT
Cache-Control: private, no-store, no-cache, no-transform, must-revalidate, max-age=0, post-check=0, pre-check=0
Pragma: no-cache
```

### X-Cache

Records whether the page came from cache upstream (probably). Not standardized, no documentation in W3C.

### X-Frame-Options

Prohibits third party framing of your site [doc](https://www.tools.ietf.org/html/rfc7034)

Stop Anyone from framing your site:

```HTTP
X-Frame-Options: SAMEORIGIN
```

But it is equivalent to

```HTTP
content-Security-Policy: frame-ancestors 'self'
```

## Resource Links

* [Headers for Hackers: Wrangling HTTP Like a Pro](https://www.youtube.com/watch?v=TNlcoYLIGFk) - Video Lecture
  * Andrew Betts - Oredev 2018
