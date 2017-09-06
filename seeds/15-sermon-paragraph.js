
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate sermonparagraph restart identity cascade')
    .then(function(){
      return knex('sermonparagraph').insert([
        {
          paragraph: `Normally I wouldn’t consider this good advice. From the time we are Leah’s age, everybody tells us that when it comes to fire, away is generally the better direction. When it comes to literal fire, we rightly honor and respect those who choose to run in, rather than away, because they are risking their lives to save those they don’t even know. For those whom that is their calling (I know we have some at Woodlane), you are the exception to that rule.

          But for now, I don’t write about literal fire. I write about one that is more figurative, but in many ways just as dangerous. I’m talking about conflict, real or imagined. It can burn. It can destroy. It can leave behind a wake of damage that makes you wonder how you survived. And that’s before it even begins…`
        },
        {
          paragraph: `Allow me to back up. A few weeks ago, I heard of a friend that was upset, hurt even. He’s not the kind of person who is super-sensitive, and while I knew I should probably check in with him (simply because that’s what friends do), I racked my brain and could only think of a few far-reaching things I might have done to hurt said friend. Nickel’s worth of free advice – Rick Warren got it right when he reminds people “It’s not about you” in Purpose Driven Life.

          I didn’t get the chance to talk to my friend until the next day. We had a good conversation and, as it turned out, my friend was worn down about something completely unrelated to me or anything I had done (insert Rick Warren’s wisdom yet again).`
        },
        {
          paragraph: `Why do I emphasize that? Because for a good 24 hours previous, I blew all my energy thinking how that phone call might go. Truth be told, it was pretty significant. I don’t remember exactly, but if the kids were having a rough afternoon, I guarantee I wasn’t going to be making it any better because of my pre-occupation with a not-yet-happened phone call.`
        },
        {
          paragraph: `My point – if there’s conflict, again real or imagined, run into it. Deal with it. Get it done. Swallow the frog, as some say. Otherwise, the safe bet says your imagination will hype it up far more than you need to. It’s biologically proven how many hundreds of chemical responses your body has just thinking about a stress like conflict. No use experiencing those any longer than necessary.`
        },
        {
          paragraph: `I pray you don’t have to practice this too often, but if you do, run into the fire. If it’s really a dire situation, then at least you are expending your energy appropriately. If it’s not (or if it’s nothing, like mine), then you can dump the elephant off your back and return to living an abundant life. That, I pray, you do very often!`
        }
      ])
    })
};
