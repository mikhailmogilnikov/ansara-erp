import { HomePage } from '@/src/page/home';
import { PageProps } from '@/src/shared/model/default.type';

export default function Home({ searchParams }: PageProps) {
  return <HomePage searchParams={searchParams} />;
}
