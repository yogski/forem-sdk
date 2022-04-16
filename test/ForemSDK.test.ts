import { ForemSDK } from '../src/ForemSDK'

const instance1 = new ForemSDK();
const instance2 = new ForemSDK('secret');

test('initialized API Key', () => {
  expect(instance1.getApiKey()).toBe(undefined);
  expect(instance2.getApiKey()).toBe('secret');
})

test('article methods', () => {
  expect(instance1.article.getPublished()).toHaveProperty('');
})