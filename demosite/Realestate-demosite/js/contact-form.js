document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // デフォルトの送信を防ぐ

    // 要素取得
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const radios = document.querySelectorAll('input[name="entry.839337160"]');

    let isValid = true;
    let firstInvalid = null;

    // エラー削除
    document
      .querySelectorAll(".input-error")
      .forEach((el) => el.classList.remove("input-error"));
    document.querySelectorAll(".error-message").forEach((el) => el.remove());

    const showError = (element, message) => {
      element.classList.add("input-error");
      const error = document.createElement("div");
      error.className = "error-message";
      error.style.color = "red";
      error.textContent = message;
      element.parentNode.appendChild(error);
      if (!firstInvalid) firstInvalid = element;
      isValid = false;
    };

    // お名前
    if (name.value.trim() === "") {
      showError(name, "お名前を入力してください。");
    }

    // メールアドレス
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      showError(email, "メールアドレスを入力してください。");
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, "正しいメールアドレスを入力してください。");
    }

    // ラジオ選択
    const radioSelected = Array.from(radios).some((r) => r.checked);
    if (!radioSelected) {
      const group = radios[0].closest(".form-group");
      showError(group, "お問い合わせ内容を選択してください。");
    }

    // 本文
    if (message.value.trim() === "") {
      showError(message, "お問い合わせ本文を入力してください。");
    }

    // バリデーション通過時のみ送信＆表示切り替え
    if (isValid) {
      const paramList = new URLSearchParams();

      // ▼Googleフォームの各項目に対応する entry 番号を指定
      paramList.append("entry.2005620554", name.value.trim()); // ← お名前
      paramList.append("entry.1045781291", email.value.trim()); // ← メール
      paramList.append("entry.1974526076", message.value.trim()); // ← 本文

      const selectedRadio = document.querySelector(
        'input[name="entry.839337160"]:checked'
      );
      if (selectedRadio) {
        paramList.append("entry.839337160", selectedRadio.value); // ← お問い合わせ内容
      }

      fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScCeCznBzmC_jZHEKyegWfdTaIH16ijolEIUDNLTZfuR4nnbg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: paramList.toString(),
        }
      ).then(() => {
        form.style.display = "none";
        successMessage.style.display = "block";
        window.scrollTo({ top: 0 });
      });
    } else if (firstInvalid) {
      firstInvalid.focus(); // 最初のエラー項目にフォーカス
    }
  });
});
