import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AuthGateway = lazy(() => import('./pages/AuthGateway'));
const Admin = lazy(() => import('./pages/Admin'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const InstagramDirectBlog = lazy(() => import('./pages/InstagramDirectBlog'));
const GorgiasAlternativesBlog = lazy(() => import('./pages/GorgiasAlternativesBlog'));
const PartnerProgram = lazy(() => import('./pages/PartnerProgram'));
const PartnerSignup = lazy(() => import('./pages/PartnerSignup'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading Fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<AuthGateway />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/instagram-direct" element={<InstagramDirectBlog />} />
        <Route path="/blog/gorgias-alternatives" element={<GorgiasAlternativesBlog />} />
        <Route path="/partners" element={<PartnerProgram />} />
        <Route path="/partner-signup" element={<PartnerSignup />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
