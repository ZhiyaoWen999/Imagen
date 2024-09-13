import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function generateImage(prompt: string): Promise<string> {
  const output = await replicate.run(
    "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
    {
      input: {
        prompt: prompt,
      }
    }
  );

  if (Array.isArray(output) && output.length > 0) {
    return output[0] as string;
  } else {
    throw new Error("Failed to generate image");
  }
}