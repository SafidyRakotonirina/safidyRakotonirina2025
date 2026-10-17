import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import { ScrollToTop } from "./components/common/ScrollToTop";

const ProjetPage = lazy(() =>
  import("./components/projets/mesProjet").then((module) => ({
    default: module.ProjetPage,
  })),
);

const CvPage = lazy(() =>
  import("./components/cv/cv").then((module) => ({
    default: module.CvPage,
  })),
);

const ProjectDetail = lazy(() =>
  import("./components/projects/ProjectDetail").then((module) => ({
    default: module.ProjectDetail,
  })),
);

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<ProjetPage />} />
          <Route path="/projets/:slug" element={<ProjectDetail />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
