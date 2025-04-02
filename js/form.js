import {CHAT_ID, API } from './modules/config.js';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    const reqInput = document.getElementById('formNumber');
    reqInput.addEventListener('click', function() {
        document.getElementById('popupNumber').classList.remove('activePopup');
    });
    
    let captchaPassed = false;

    async function formSend(e) {
        e.preventDefault();

        if (!captchaPassed) {
            alert('Подтвердите, что вы не робот!');
            return;
        }

        let error = formValidate(form);

        const { name, number, comment } = Object.fromEntries(new FormData(form).entries());
        const text = `\n<b>Новая заявка на замер</b>\n\nЗаказчик: ${name}\nНомер: ${number}\nКомментарий: <i>${comment}</i>`;

        if (captchaPassed && error === 0) {
            document.getElementById('loader').classList.add('_sending');

            try {
                const res = await axios.post(API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: text
                });

                alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');

            } catch (err) {

                alert('Ошибка отправки данных. Повторите попытку.');
                console.error(err);

            } finally {

                form.reset();
                document.getElementById('loader').classList.remove('_sending');
            }
        } else {
            document.getElementById('popupNumber').classList.add('activePopup');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.value.trim() === '') {
                formAddError(input);
                error++;
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function onCaptchaSuccess() {
        captchaPassed = true;
    }

    function onCaptchaExpired() {
        captchaPassed = false;
    }

    window.onCaptchaSuccess = onCaptchaSuccess;
    window.onCaptchaExpired = onCaptchaExpired;
});

