import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import KetamineTherapy from "./pages/KetamineTherapy";
import WeightManagement from "./pages/WeightManagement";
import ProviderReferral from "./pages/ProviderReferral";
import IntakeForms from "./pages/IntakeForms";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Router() {
  return (
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
