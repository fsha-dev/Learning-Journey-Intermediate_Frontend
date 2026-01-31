dude could you make this more understandable also i do not know what is RAM and what is CPU and how they integrated and what is those bite and things that teacher said?
Does someone knowwhat RAM means?
JASON KU: Random access memory--
it means that I can randomlyaccess different places
in memory in constant time.
That's the assumptionof random access memory.
Basically, what ourmodel of a computer is
you have memory,which is essentially
just a string of bits.
It's just a bunchof 1's and 0's.
And we have a computer, likea CPU, which is really small.
It can basically hold asmall amount of information,
but it can changethat information.
It can operate onthat information,
and it also has instructionsto randomly access
different places in memory,bring it into the CPU,
act on it, and read it back.
Does that makes sense?
But in general, wedon't have an address
for every bit in memory,every 0 and 1 in memory.
Does anyone know how moderncomputers are addressed?
Yeah?
STUDENT: [INAUDIBLE]
JASON KU: OK, so we'regoing to get there.
Actually, what a moderncomputer is addressed intes, collections of 8 bits.
So there's an addressI have for every 8 bits
in memory-- consecutive8 bits in memory.
And so if I want to pullsomething in into the CPU,
I give it an address.
It'll take some chunk, and bringit into the CPU, operate on it,
and spit it back.
How big is that chunk?
This goes to the answer thatyou were asking, which--
or saying, which is it's somesequence of some fixed number
of bits, which we call a word.
A word is how big ofa chunk that the CPU
can take in from memoryat a time and operate on.
In your computers, howbig is that word size?
64 bits-- that's how muchI can operate on at a time.
When I was growing up,when I was your age,
my word size was 32 bits.
And that actually was aproblem for my computer,
because in order forme to be able to read
to address inmemory, I need to be
able to store that addressin my CPU, in a word.
But if I have 32 bits, howmany different addresses can
I address?
I have a limitation on thememory addresses I can address,
right?
So how many differentmemory addresses
can I address with 32 bits?
2 to the 32, right?
That makes sense.
Well, if you do that calculationout, how big of a hard disk
can I have to access?
It's about 4 gigabytes.
So in my day, allthe hard drives
were limited to beingpartitioned-- even if you
had a bigger than 4gigabyte hard drive,
I had to partition it intothese 4 gigabyte chunks, which
the computer couldthen read onto.
That was verylimiting, actually.
That's a restriction.
With 64 bits, what'smy limitation on memory
that I can address--
byte addressable?
Turns out to be somethinglike 20 exabytes--
to put this incontext, all data that
Google stores ontheir servers, on all
drives throughout the world--
it's about 10.
So we're not going to run outof this limitation very soon.
So what do we gotwe've got a CPU.
It can address memory.
What are the operationsI can do in this CPU?
Generally, I havebinary operations.
I can compare towords in memory,
and I can either do integerarithmetic, logical operations,
bitwise operations--
but we're not going to usethose so much in this class.
And I can write and writefrom an address in memory,
a word in constant time.
Those are theoperations that I have
available to me on most CPUs.
Some CPUs give you alittle bit more power,
but this is generally what weanalyze algorithms with respect
to.
OK?
But you'll noticethat my CPU is only
built to operate on a constantamount of information at once--
generally, two words in memory.
An operation produces athird one, and I spit it out.
It takes a constantamount of time
to operate on a constantamount of memory.
If I want to operate on alinear amount of memory--
n things-- how longis that going to take?
If I just want to readeverything in that thing,
it's going to takeme linear time,
because I have to readevery part of that thing.
OK, so in general,what we're going
to do for the first halfof this class mostly--
first eight lectures, anyway--
is talk about data structures.
And it's going to beconcerned about not operating
on constant amount of data ata time, like our CPU is doing,
but instead, what it'sgoing to do is operate on--
store a large amount of dataand support different operations
on that data.
So if I had a recordthat I want to maintain
to store those birthdaysthat we had before,
I might use somethinglike a static array, which
you guys maybe are notfamiliar with, if youbeen working in Python isyour only programming language.
Python has a lot of reallyinteresting data structures,
like a list, and aset, and a dictionary,
and all these kindsof things that
are actually not in this model.
There's actually a lot of codebetween you and the computer,
and it's not alwaysclear how much time
that interface is taking.
And so what we're goingto do starting on Thursday
is talk about ways ofstoring a non-constant amount
of information tomake operations
on that information faster.
