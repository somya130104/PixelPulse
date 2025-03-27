import { mutation } from "./_generated/server";
import { v } from "convex/values"; // ✅ Import v from convex/values

export const createNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    pictureURL: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (!user[0]?.email) {
      const result = await ctx.db.insert("users", {
        name: args.name,
        email: args.email,
        pictureURL: args.pictureURL,
        credits: 3,
      });
      return {
        name: args.name,
        email: args.email,
        pictureURL: args.pictureURL,
        credits: 3,
      };
      
    }
    console.log("User saved @users.js", user[0]);
    return user[0];
  },
});

export const UpdateUserCredits = mutation({
  args: {
    uid: v.id("users"),
    credits: v.number()
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.patch(args.uid, {
      credits: args.credits
    });
    return result;
  }
});
