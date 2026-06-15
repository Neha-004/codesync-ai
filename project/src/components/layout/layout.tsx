import { Outlet } from 'react-router-dom';
import { Navbar } from './AppNavbar';
import { Sidebar } from './Sidebar';
import { useState } from 'react';
import { CreateRoomModal } from '@/components/modals/CreateRoomModal';
import { KeyboardShortcutsModal } from '@/components/modals/KeyboardShortcutsModal';
import { cn } from '@/lib/utils';

interface AppLayoutProps {
  isAuthenticated?: boolean;
}

export function AppLayout({ isAuthenticated = true }: AppLayoutProps) {
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);

  return (
    <div className="min-h-screen bg-codesync-bg">
      <Navbar
        isAuthenticated={isAuthenticated}
        onOpenKeyboardShortcuts={() => setShowKeyboardShortcuts(true)}
      />
      {isAuthenticated && (
        <Sidebar onCreateRoom={() => setShowCreateRoom(true)} />
      )}
      <main
        className={cn(
          'pt-16 min-h-screen',
          isAuthenticated && 'pl-60'
        )}
      >
        <Outlet />
      </main>

      <CreateRoomModal
        open={showCreateRoom}
        onOpenChange={setShowCreateRoom}
      />
      <KeyboardShortcutsModal
        open={showKeyboardShortcuts}
        onOpenChange={setShowKeyboardShortcuts}
      />
    </div>
  );
}

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-codesync-bg">
      <Navbar isAuthenticated={false} />
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
