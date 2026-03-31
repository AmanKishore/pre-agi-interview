export class TimeoutError extends Error {
  readonly name = "TimeoutError";

  constructor(
    public readonly label: string,
    public readonly timeoutMs: number
  ) {
    super(`${label} timed out after ${timeoutMs}ms`);
  }
}

export async function withTimeout<T>(
  work: Promise<T>,
  options: { label: string; timeoutMs: number }
): Promise<T> {
  const { label, timeoutMs } = options;

  return await new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new TimeoutError(label, timeoutMs));
    }, timeoutMs);

    work
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
}
