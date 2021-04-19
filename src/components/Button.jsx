import {useState, useEffect, useRef} from 'react'
import React from 'react'
import cn from 'classnames'

export const Button = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    }
  }, []);

  const handleClick = async () => {
    setLoading(true);
    setHasError(false);

    try {
      await props.onClick();
    }
    catch (err) {
      if (isMountedRef.current) {
        setHasError(true);
      }
    }

    if (isMountedRef.current) {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClick} className={cn('button', {'is-loading': isLoading, 'is-danger': hasError })} children={props.children} />
  )
}
