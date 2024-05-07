import FilterLayout from "@/components/FilterLayout";

export default function MoviesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FilterLayout title="Movies" >
        {children}
    </FilterLayout>
  );
}
