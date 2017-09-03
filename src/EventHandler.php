<?php

namespace Workshop;

use Ratchet\ConnectionInterface;
use Ratchet\Wamp\WampServerInterface;
use Thruway\Transport\RatchetTransportProvider;

/**
 * @package Workshop
 */
class EventHandler extends RatchetTransportProvider implements WampServerInterface
{
    /**
     * @todo 3. Look at the ConnectionInterface methods and see which method oyu need to call to send data to the client
     *
     * When a new connection is opened it will be passed to this method
     *
     * @param  ConnectionInterface $conn The socket/connection that just connected to your application
     *
     * @throws \Exception
     */
    public function onOpen(ConnectionInterface $conn)
    {

    }

    /**
     * @todo 2. When JS calls send(), it will trigger this method - echo the message out so you can see it in terminal
     *
     * @param ConnectionInterface $from
     * @param string              $msg
     */
    public function onMessage(ConnectionInterface $from, $msg)
    {
    }

    /* Ignore these methods, we'll come to them later */
    public function onClose(ConnectionInterface $conn) { }
    public function onError(ConnectionInterface $conn, \Exception $e) { }
    public function onCall(ConnectionInterface $conn, $id, $topic, array $params) { }
    public function onSubscribe(ConnectionInterface $conn, $topic) { }
    public function onUnSubscribe(ConnectionInterface $conn, $topic) { }
    public function onPublish(ConnectionInterface $conn, $topic, $event, array $exclude, array $eligible) { }
}