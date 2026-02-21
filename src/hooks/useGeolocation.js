import { useState, useEffect, useRef, useCallback } from 'react'

export default function useGeolocation() {
  const [position, setPosition] = useState(null)
  const [error, setError] = useState(null)
  const [permissionState, setPermissionState] = useState('prompt')
  const watchIdRef = useRef(null)
  const isWatchingRef = useRef(false)

  // Check permission state
  useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        setPermissionState(result.state)
        result.addEventListener('change', () => {
          setPermissionState(result.state)
        })
      })
    }
  }, [])

  const startWatching = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      return
    }

    if (isWatchingRef.current) return
    isWatchingRef.current = true

    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
          timestamp: pos.timestamp,
        })
        setError(null)
      },
      (err) => {
        setError(err.message)
        if (err.code === 1) setPermissionState('denied')
      },
      {
        enableHighAccuracy: true,
        maximumAge: 2000,
        timeout: 10000,
      }
    )
  }, [])

  const stopWatching = useCallback(() => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current)
      watchIdRef.current = null
    }
    isWatchingRef.current = false
  }, [])

  useEffect(() => {
    return () => stopWatching()
  }, [stopWatching])

  return { position, error, permissionState, startWatching, stopWatching }
}
