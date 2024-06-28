import { Routes } from '@angular/router';
import { LoginComponent } from "./pages/auth/login/login.component";
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './pages/auth/verify-email/verify-email.component';

export const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent, 
    title: 'Task Management System | Login Page' 
  },
  { 
    path: 'signup', 
    component: SignupComponent, 
    title: 'Task Management System | Signup Page' 
  },
  { 
    path: 'forgot-password', 
    component: ForgotPasswordComponent, 
    title: 'Task Management System | Forgot Password Page' 
  },
  { 
    path: 'verify-email', 
    component: VerifyEmailComponent, 
    title: 'Task Management System | verify Email Page' 
  },
]
