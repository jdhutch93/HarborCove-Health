import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import KetamineTherapy from "./pages/KetamineTherapy";
import WeightManagement from "./pages/WeightManagement";
import ProviderReferral from "./pages/ProviderReferral";
import IntakeForms from "./pages/IntakeForms";
import About from "./pages/About";
import Contact from "./pages/Contact";

/** Scrolls to the top of the page on every route change */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/ketamine-therapy" component={KetamineTherapy} />
      <Route path="/weight-management" component={WeightManagement} />
      <Route path="/provider-referral" component={ProviderReferral} />
      <Route path="/intake-forms" component={IntakeForms} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
