import UserSideBar from '@/components/UserSideBar';

type Props = {
  children: React.ReactNode;
};

async function UserLayout({ children }: Props) {
  return (
    <main className="flex-row justify-center top-0 flex w-full min-h-full">
      <nav className="w-1/3 pb-0 sm:pb-10 bg-gray-100 pl-2 sm:pl-8">
        <UserSideBar />
      </nav>
      <div className="w-full">{children}</div>
    </main>
  );
}

export default UserLayout;
