# Rebuild of TinyApp: You can(not) refactor

## Step 1: Build a skeleton

`rails new tinyapp-rails`

## Step 2: Scaffold the user

`bin/rails generate scaffold User name email password_digest`

## Step 3: Update the structure to acomodate for password hashing

- Update password_digest to password in the form and the controller permissions
- Uncomment the bcrypt gem
- Add `has_secure_password` to the user model
