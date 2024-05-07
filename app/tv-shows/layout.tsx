import FilterLayout from "@/components/FilterLayout";

export default function TVShowsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FilterLayout title="TV Shows" >
        {children}
    </FilterLayout>
  );
}
