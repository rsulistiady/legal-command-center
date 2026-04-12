import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';
import { MatterDrawer } from '@/components/legal/MatterDrawer';
import type { AppRoute } from '@/app/router/routes';
import { OverviewPage } from '@/pages/OverviewPage';
import { MappingPage } from '@/pages/MappingPage';
import { WorkflowPage } from '@/pages/WorkflowPage';
import { ValidationPage } from '@/pages/ValidationPage';
import { PresentationBuilderPage } from '@/pages/PresentationBuilderPage';
import { PresentationModePage } from '@/pages/PresentationModePage';
import { DocumentsPage } from '@/pages/DocumentsPage';
import { AnalyticsPage } from '@/pages/AnalyticsPage';
import { SettingsPage } from '@/pages/SettingsPage';

const renderRoute = (route: AppRoute) => {
  switch (route) {
    case 'overview':
      return <OverviewPage />;
    case 'mapping':
      return <MappingPage />;
    case 'workflow':
      return <WorkflowPage />;
    case 'validation':
      return <ValidationPage />;
    case 'presentation-builder':
      return <PresentationBuilderPage />;
    case 'presentation-mode':
      return <PresentationModePage />;
    case 'documents':
      return <DocumentsPage />;
    case 'analytics':
      return <AnalyticsPage />;
    case 'settings':
      return <SettingsPage />;
  }
};

export const App = () => {
  const [route, setRoute] = useState<AppRoute>('overview');

  return (
    <div className="flex min-h-screen text-slate-100">
      <Sidebar route={route} onChange={setRoute} />
      <main className="relative flex-1 p-6">
        <Topbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {renderRoute(route)}
          </motion.div>
        </AnimatePresence>
      </main>
      <MatterDrawer />
    </div>
  );
};
