import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl text-slate-600 font-bold">Homepage</h1>
      <Link to="/dashboard">
        <Button>Dashboard</Button>
      </Link>
    </div>
  );
}
