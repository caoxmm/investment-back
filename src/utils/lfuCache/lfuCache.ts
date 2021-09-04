import { DoubleLinkedList, Node } from './doubleLinkedList';
export class CacheNode<T> {
  key: string;
  value: T;
  freq: number;
  constructor(key: string, value: T, freq: number) {
    this.key = key;
    this.value = value;
    this.freq = freq;
  }
}

/**
 * LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
export class LFUCache<E> {
  capacity: number;
  minFreq = 0;
  keyTable: Map<string, Node<CacheNode<E>>>;
  freqTable: Map<number, DoubleLinkedList<CacheNode<E>>>;

  constructor(capacity: number) {
    this.minFreq = 0;
    this.capacity = capacity;
    this.keyTable = new Map();
    this.freqTable = new Map();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key: string): E | undefined {
    if (this.capacity === 0) {
      return undefined;
    }
    const node = this.keyTable.get(key);
    if (node === undefined) {
      return undefined;
    }

    const cacheNode = node.element;
    const val = cacheNode.value;
    const freq = cacheNode.freq;
    const freqList = this.freqTable.get(freq);
    if (freqList) {
      freqList.remove(node);
    }
    // 如果当前链表为空，我们需要在哈希表中删除，且更新minFreq
    const removedFreqList = this.freqTable.get(freq);
    if (removedFreqList && removedFreqList.size === 0) {
      this.freqTable.delete(freq);
      if (this.minFreq === freq) {
        this.minFreq += 1;
      }
    }
    // 插入到 freq + 1 中
    let list = this.freqTable.get(freq + 1);
    if (!list) {
      list = new DoubleLinkedList<CacheNode<E>>();
    }
    list.unshift(new CacheNode(key, val, freq + 1));
    this.freqTable.set(freq + 1, list);
    this.keyTable.set(key, list.peekFirst());
    return val;
  }

  remove(key: string) {
    if (this.capacity === 0) {
      return;
    }
    const node = this.keyTable.get(key);
    if (node === undefined) {
      return;
    }
    const cacheNode = node.element;
    const freq = cacheNode.freq;
    const freqList = this.freqTable.get(freq);
    if (freqList) {
      freqList.remove(node);
      if (freqList.size === 0) {
        this.freqTable.delete(freq);
        if (this.minFreq === freq) {
          this.minFreq += 1;
        }
      }
    }
    this.keyTable.delete(key);
  }

  clearByKeyStart(keyStart: string) {
    if (this.capacity === 0) {
      return;
    }
    Object.keys(this.keyTable).forEach((key) => {
      if (key.startsWith(keyStart)) {
        this.remove(key);
      }
    });
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key: string, value: E): void {
    if (this.capacity === 0) {
      return;
    }
    const node = this.keyTable.get(key);
    if (node === undefined) {
      // 缓存已满，需要进行删除操作
      if (this.keyTable.size === this.capacity) {
        // 通过 minFreq 拿到 freq_table[minFreq] 链表的末尾节点
        const minFreqList = this.freqTable.get(this.minFreq);
        if (minFreqList) {
          const node = minFreqList.peekLast();
          const cacheNode = node.element;
          this.keyTable.delete(cacheNode.key);
          minFreqList.pop();
          if (minFreqList.size === 0) {
            this.freqTable.delete(this.minFreq);
          }
        }
      }
      let list = this.freqTable.get(1);
      if (list === undefined) {
        list = new DoubleLinkedList<CacheNode<E>>();
      }
      list.unshift(new CacheNode(key, value, 1));
      this.freqTable.set(1, list);
      this.keyTable.set(key, list.peekFirst());
      this.minFreq = 1;
    } else {
      // 与 get 操作基本一致，除了需要更新缓存的值
      const node = this.keyTable.get(key);
      if (node) {
        const cacheNode = node.element;
        const freq = cacheNode.freq;
        const list = this.freqTable.get(freq);
        if (list) {
          list.remove(node);
          if (list.size === 0) {
            this.freqTable.delete(freq);
            if (this.minFreq === freq) {
              this.minFreq += 1;
            }
          }
        }
        let upList = this.freqTable.get(freq + 1);
        if (upList === undefined) {
          upList = new DoubleLinkedList<CacheNode<E>>();
        }
        upList.unshift(new CacheNode(key, value, freq + 1));
        this.freqTable.set(freq + 1, upList);
        this.keyTable.set(key, upList.peekFirst());
      }
    }
  }
}
