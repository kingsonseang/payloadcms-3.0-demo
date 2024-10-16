import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <header className='mb-12 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to Our Blog</h1>
        <p className='text-xl text-muted-foreground'>
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
      </header>

      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-6'>Featured Article</h2>
        <Card className='overflow-hidden'>
          <div className='md:flex'>
            <div className='md:w-2/3'>
              <Image
                src='/placeholder.svg?height=400&width=600'
                alt='Featured article cover'
                width={600}
                height={400}
                className='w-full h-64 object-cover md:h-full'
              />
            </div>
            <div className='md:w-1/3 p-6'>
              <h3 className='text-2xl font-bold mb-2'>
                The Future of AI in Everyday Life
              </h3>
              <p className='text-muted-foreground mb-4'>
                Explore how artificial intelligence is reshaping our daily
                routines and what to expect in the coming years.
              </p>
              <div className='flex items-center mb-4'>
                <Avatar className='h-10 w-10'>
                  <AvatarImage
                    src='/placeholder.svg?height=40&width=40'
                    alt='Author'
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className='ml-4'>
                  <p className='text-sm font-medium'>John Doe</p>
                  <p className='text-xs text-muted-foreground'>
                    May 15, 2023 · 10 min read
                  </p>
                </div>
              </div>
              <Button variant='outline'>Read More</Button>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-6'>Latest Articles</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i}>
              <CardHeader className='p-0'>
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Article ${i}`}
                  alt={`Article ${i} cover`}
                  width={400}
                  height={200}
                  className='w-full h-48 object-cover'
                />
              </CardHeader>
              <CardContent className='p-4'>
                <h3 className='text-xl font-bold mb-2'>
                  Exciting Blog Post Title {i}
                </h3>
                <p className='text-muted-foreground mb-4'>
                  A brief preview of the article content goes here, enticing
                  readers to click and read more...
                </p>
              </CardContent>
              <CardFooter className='p-4 pt-0 flex items-center justify-between'>
                <div className='flex items-center'>
                  <Avatar className='h-8 w-8'>
                    <AvatarImage
                      src='/placeholder.svg?height=32&width=32'
                      alt='Author'
                    />
                    <AvatarFallback>A{i}</AvatarFallback>
                  </Avatar>
                  <div className='ml-2'>
                    <p className='text-sm font-medium'>Author Name</p>
                    <p className='text-xs text-muted-foreground'>
                      May {i + 10}, 2023 · 5 min read
                    </p>
                  </div>
                </div>
                <Button variant='ghost' size='sm'>
                  Read
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
