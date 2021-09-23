import checkIfElementExists from '../lib/checkIfElementExists';

const SELECTORS = {
    userNameInput: "input[placeholder='Nhập số điện thoại']",
    passwordInput: "input[placeholder='Mật khẩu']",
    loginButton: "button[type='submit']",
    snackBar: 'div.MuiAlert-message > p',
};
export const inputLoginInfo = async (username: string, password: string) => {
    await checkIfElementExists(SELECTORS.userNameInput, false, 1);
    await $(SELECTORS.userNameInput).setValue(username);
    await checkIfElementExists(SELECTORS.passwordInput, false, 1);
    await $(SELECTORS.passwordInput).setValue(password);
};

export const pressLoginButton = async () => {
    await checkIfElementExists(SELECTORS.loginButton, false, 1);
    await $(SELECTORS.loginButton).click();
    await browser.pause(2000);
};

export const checkSnackbarMessage = async (text: string) => {
    await checkIfElementExists(SELECTORS.snackBar, false, 1);
    const content = await $(SELECTORS.snackBar).getText();
    expect(content).toBe(text);
};
