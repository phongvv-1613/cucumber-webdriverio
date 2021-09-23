Feature: Login
    As a user
    I want to login Fresh Fresh Merchant
    In order to manage my store

    Scenario: Log in with an account that doesn't exist
        Given I open the url "https://myfresh-merchant-dev.tripi.vn/"
        When I input phone number "0356192129" and password "123321"
        And I press login button
        Then I should see error snackbar with content "Tài khoản không tồn tại trong hệ thống hoặc mật khẩu không chính xác"

    Scenario: Login successfully
        Given I open the url "https://myfresh-merchant-dev.tripi.vn/"
        When I input phone number "0999888777" and password "123321"
        And I press login button
        Then  I expect that the url is "https://myfresh-merchant-dev.tripi.vn/home"
