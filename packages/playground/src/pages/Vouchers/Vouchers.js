import AdyenCheckout from '@adyen/adyen-web';
import '@adyen/adyen-web/dist/adyen.css';
import { shopperLocale } from '../../config/commonConfig';
import '../../../config/polyfills';
import '../../style.scss';
import '../../utils';
import './Vouchers.scss';

window.checkout = new AdyenCheckout({
    clientKey: process.env.__CLIENT_KEY__,
    locale: shopperLocale,
    environment: 'test',
    showPayButton: true
});

window.multibancoResult = checkout
    .createFromAction({
        expiresAt: '2019-09-28T12:54:17',
        initialAmount: {
            currency: 'EUR',
            value: 1000
        },
        entity: '1234',
        merchantName: 'TestMerchant',
        merchantReference: 'Your order number',
        paymentMethodType: 'multibanco',
        reference: '501 051 808',
        totalAmount: {
            currency: 'EUR',
            value: 1000
        },
        type: 'voucher'
    })
    .mount('#multibanco-result-container');

// Boleto Input
window.boletoInput = checkout
    .create('boletobancario', {
        // personalDetailsRequired: false,
        // billingAddressRequired: false,
        showEmailAddress: true,
        data: {
            socialSecurityNumber: '32553325916',
            billingAddress: {
                street: 'Fake street',
                houseNumberOrName: '123',
                city: 'Sao Paulo',
                postalCode: '123456',
                stateOrProvince: 'SP'
            },
            shopperEmail: 'paolo@adyen.nl'
        },
        // onChange: console.log,
        onSubmit: e => console.log('SUBMIT:', e)
    })
    .mount('#boleto-input-container');

// Boleto Result
window.boletoResult = checkout
    .createFromAction({
        downloadUrl:
            'https://live.adyen.com/hpp/generationBoleto.shtml?data=BQABAQBiROXc%2FFFtidGxW50h%2BEQvgfC4e69HcO3HlJxe4sDzrhDOy%2Bq069DVXKIhQsSlil2%2BTZS8WZkd%2BXUzB3BzcOLkyWk83kVQtO3UVsFn%2FzQFqY6Hk5yvOSvXt3q6qmLlyeApnTlXp3yMStKMJtNa7UAd%2BuYLwp%2BF202CqEQB65hNQ5AMiawAQTBwew%2BAFPoratV49Gcg%2F9MQY93JVh9dQNgGuxaycUeQ1eHnkaddfzdTjj2GbZ86Z%2B0FONYnUEnNuOtXSENJ3kqhws8HNCzZsnG1QAN71xVfyMRBnVJYOwrXM2Kmsl1faxKEt5Xzwk0EHFbuE%2FO%2B2OUdVqH2oaERf14rELRFJ1pdO37ZgkqQ7omi5coAAG16XYunNtrgEmBKiM%2Bxq3orhAOCrKiE8N%2BJKJX6IyqW1IhORa8ZnmN3gYktCz3l2DP1ZbzGuH3iFbQPBd7p1ID5ZiNBxgiOEOpio2yLpJHUlugk1YPPD0G5mHbcsdNkK300OCRDLZbiB6zKC%2BE6%2FDYGicMJUlQt2JAjP%2BJ17BldAIWpmaYOpU0biYDU%2FsvGT5jHsUFQXiFl1J0bdPSS9dw1d9Y61UsnkTX%2FOKUBel76gOTZNW7b4c3Y',
        expiresAt: '2019-09-11T00:00:00',
        initialAmount: {
            currency: 'BRL',
            value: 10
        },
        paymentMethodType: 'boletobancario_itau',
        reference: '34191.75579 52144.832939 82674.790009 2 80090000000010',
        totalAmount: {
            currency: 'BRL',
            value: 10
        },
        type: 'voucher'
    })
    .mount('#boleto-result-container');

// Oxxo Result
window.oxxoResult = checkout
    .createFromAction({
        expiresAt: '2019-08-17T23:59:59',
        initialAmount: {
            currency: 'MXN',
            value: 5
        },
        instructionsUrl: 'http://localhost:8080/checkoutshopper/voucherInstructions.shtml?txVariant=oxxo',
        paymentMethodType: 'oxxo',
        reference: '59599656976034832019081700000056',
        alternativeReference: 'AR TEST 123 456',
        merchantReference: 'MR TEST 123 456',

        totalAmount: {
            currency: 'MXN',
            value: 5
        },
        type: 'voucher'
    })
    .mount('#oxxo-result-container');

// Dragonpay Input
window.dragonpayInput = checkout.create('dragonpay_otc_philippines', {}).mount('#dragonpay-input-container');

// Dragonpay Result
window.dragonpayResult = checkout
    .createFromAction({
        alternativeReference: '013547006605',
        expiresAt: '2019-07-17T23:59:00',
        initialAmount: {
            currency: 'PHP',
            value: 1000
        },
        instructionsUrl:
            'https://checkoutshopper-test.adyen.com/checkoutshopper/voucherInstructions.shtml?txVariant=dragonpay_otc_banking&issuerId=BPXB',
        issuer: 'BPXB',
        merchantName: 'TestMerchantCheckout',
        paymentMethodType: 'dragonpay_otc_banking',
        reference: 'EA5IPWB3',
        surcharge: {
            currency: 'PHP',
            value: 10000
        },
        totalAmount: {
            currency: 'PHP',
            value: 11000
        },
        type: 'voucher'
    })
    .mount('#dragonpay-result-container');

// Doku Input
window.dokuInput = checkout.create('doku_alfamart').mount('#doku-input-container');

// Doku Result
window.dokuResult = checkout
    .createFromAction({
        expiresAt: '2019-07-16T19:50:00',
        initialAmount: {
            currency: 'IDR',
            value: 1000
        },
        instructionsUrl: 'https://checkoutshopper-test.adyen.com/checkoutshopper/voucherInstructions.shtml?txVariant=doku_alfamart',
        merchantName: 'TestMerchantCheckout',
        paymentMethodType: 'doku_alfamart',
        reference: '8888826030103141',
        shopperEmail: '1212@aaa.com',
        shopperName: 'J Smith',
        totalAmount: {
            currency: 'IDR',
            value: 1000
        },
        type: 'voucher'
    })
    .mount('#doku-result-container');

// Econtext Input
window.econtextInput = checkout
    .create('econtext_stores', {
        data: {
            firstName: 'Joe',
            lastName: 'Smith',
            shopperEmail: 'test@email.com',
            telephoneNumber: '06210987654321'
        }
    })
    .mount('#econtext-stores-input-container');

// Econtext Result
window.econtextResult = checkout
    .createFromAction({
        paymentMethodType: 'econtext_stores',
        expiresAt: '2019-07-19T23:24:00',
        initialAmount: {
            currency: 'JPY',
            value: 1000
        },
        instructionsUrl: 'https://www.econtext.jp/support/cvs/8brand.html',
        maskedTelephoneNumber: '98******10',
        merchantName: 'Adyen Demo Shop',
        reference: '458535',
        totalAmount: {
            currency: 'JPY',
            value: 1000
        },
        type: 'voucher'
    })
    .mount('#econtext-stores-result-container');

// Econtext ATM Input
window.econtextInput = checkout
    .create('econtext_atm', {
        data: {
            firstName: 'Joe',
            lastName: 'Smith',
            shopperEmail: 'test@email.com',
            telephoneNumber: '06210987654321'
        }
    })
    .mount('#econtext-atm-input-container');

// Econtext ATM Result
window.econtextResult = checkout
    .createFromAction({
        paymentMethodType: 'econtext_atm',
        collectionInstitutionNumber: '58091',
        expiresAt: '2019-07-19T23:24:00',
        initialAmount: {
            currency: 'JPY',
            value: 1000
        },
        instructionsUrl: 'https://www.econtext.jp/support/atm/index.html',
        maskedTelephoneNumber: '98******10',
        merchantName: 'Adyen Demo Shop',
        reference: '458535',
        totalAmount: {
            currency: 'JPY',
            value: 1000
        },
        type: 'voucher'
    })
    .mount('#econtext-atm-result-container');

// Econtext 7 11 input
window.econtext711Input = checkout.create('econtext_seven_eleven').mount('#econtext-seven-eleven-input-container');

// Econtext 7 11 result
window.econtext711Result = checkout
    .createFromAction({
        expiresAt: '2019-07-19T23:24:00',
        initialAmount: {
            currency: 'JPY',
            value: 1000
        },
        instructionsUrl:
            'https://checkoutshopper-test.adyen.com/checkoutshopper/voucherInstructions.shtml?txVariant=econtext_stores&shopperLocale=en-US',
        merchantName: 'Adyen Demo Shop',
        paymentMethodType: 'econtext_seven_eleven',
        reference: '458535',
        totalAmount: {
            currency: 'JPY',
            value: 1000
        },
        type: 'voucher'
    })
    .mount('#econtext-seven-eleven-result-container');
