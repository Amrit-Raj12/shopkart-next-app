export default function handler(req, res) {
 res.redirect('https://checkout.stripe.com/c/pay/cs_test_a1ZzeyGg2N6KvQKuxx6GWG2fGHtHG9ZIxCmceZUtqqgBC2PVQAy5D44KLB#fidkdWxOYHwnPyd1blpxYHZxWjA0SzR2UV1WQkl%2FTndNQDxzPTZiTWtHYnYwamY0UjE8MjR9MGZQYEltcUdTPHNidlUxY0txTn1jcWludk9ESmtpcGBMaDc9VzduZGc1aEdESDJQY1FCMDxINTV3Zm59bEBAUScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl')

}

module.exports = (req, res) => {
    res.status(200).send('Hello, World!');
};

