import { Redis } from '@upstash/redis'
import { REDIS_KEY } from '$env/static/private';

const redis = new Redis({
  url: 'https://fancy-louse-42873.upstash.io',
  token:  REDIS_KEY ,
})

export async function writeToCache(key: string, data: any) {
  await redis.set(key, JSON.stringify(data));
}

export async function readFromCache(key: string) {
    const data = await redis.get<string>(key);
    if (!data) return null;
    return JSON.parse(data);
    }

const data = await redis.set('foo', 'bar');