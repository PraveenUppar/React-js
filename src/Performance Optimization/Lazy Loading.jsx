import { lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
